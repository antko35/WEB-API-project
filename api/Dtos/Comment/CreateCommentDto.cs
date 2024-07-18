using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(5,ErrorMessage ="Title must be 5 characters")]
        [MaxLength(280,ErrorMessage ="Title must be less then 280 characters")]
        public String Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5,ErrorMessage ="Content must be 5 characters")]
        [MaxLength(280,ErrorMessage ="Content must be less then 280 characters")]
        public String Content { get; set; } = string.Empty;
    }
}