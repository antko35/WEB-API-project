using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class UpdateStockRequestDto
    {
         [Required]
        [MaxLength(10, ErrorMessage ="Symbol must be less then 10 charaters")]
        public String Symbol {get; set;} = String.Empty;
        [Required]
        [MaxLength(10, ErrorMessage ="CompanyName must be less then 10 charaters")]
        public string CompanyName { get; set; } = String.Empty;
        [Required]
        [Range(1,10000000)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.001,100)]
        public decimal LastDiv { get; set; }
        [Required]
        [MaxLength(10, ErrorMessage ="Industry cannot be over 10 characters")]
        public string Industry { get; set; } = String.Empty;
        [Required]
        [Range(1,5000000000)]
        public long MarketCap { get; set; }
    }
}