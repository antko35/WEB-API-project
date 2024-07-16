using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public StockController (ApplicationDBContext context)
        {
            _context=context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var stocks=await _context.Stock.ToListAsync();
            var stockDto = stocks.Select(s => s.ToStockDto());// Преобразование каждого объекта Stock в объект StockDto
            return Ok(stocks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id){
            var stock=await _context.Stock.FindAsync(id);
            if(stock == null){
                return NotFound();
            }
            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto){
            var stockModel = stockDto.ToStockFromCreateDto();
            await _context.Stock.AddAsync(stockModel);
            await _context.SaveChangesAsync();
            //return Ok(stockModel.ToStockDto());
            return CreatedAtAction(nameof(GetById), new{id=stockModel.Id}, stockModel.ToStockDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id,[FromBody] UpdateStockRequestDto updateDto){
            var stockModel = await _context.Stock.FirstOrDefaultAsync(x => x.Id==id);
            if(stockModel == null){
                return NotFound();
            }
            stockModel.Purchase=updateDto.Purchase;
            stockModel.Symbol = updateDto.Symbol;
            stockModel.MarketCap=updateDto.MarketCap;
            stockModel.LastDiv=updateDto.LastDiv;
            stockModel.Industry=updateDto.Industry;
            stockModel.CompanyName=updateDto.CompanyName;

            await _context.SaveChangesAsync();

            return Ok(stockModel.ToStockDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id){
            var stockModel = await _context.Stock.FirstOrDefaultAsync(x => x.Id==id);
            if(stockModel == null){
                return NotFound();
            }
            _context.Stock.Remove(stockModel);
            await _context.SaveChangesAsync();
            return NoContent();

        }
    }
}