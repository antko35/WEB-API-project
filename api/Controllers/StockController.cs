using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult GetAll(){
            var stocks=_context.Stock.ToList()
            .Select( s => s.ToStockDto());// Преобразование каждого объекта Stock в объект StockDto
            return Ok(stocks);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id){
            var stock=_context.Stock.Find(id);
            if(stock == null){
                return NotFound();
            }
            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateStockRequestDto stockDto){
            var stockModel = stockDto.ToStockFromCreateDto();
            _context.Stock.Add(stockModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new{id=stockModel.Id}, stockModel.ToStockDto());
        }
        
        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id,[FromBody] UpdateStockRequestDto updateDto){
            var stockModel = _context.Stock.FirstOrDefault(x => x.Id==id);
            if(stockModel == null){
                return NotFound();
            }
            stockModel.Purchase=updateDto.Purchase;
            stockModel.Symbol = updateDto.Symbol;
            stockModel.MarketCap=updateDto.MarketCap;
            stockModel.LastDiv=updateDto.LastDiv;
            stockModel.Industry=updateDto.Industry;
            stockModel.CompanyName=updateDto.CompanyName;

            _context.SaveChanges();

            return Ok(stockModel.ToStockDto());
        }

    }
}