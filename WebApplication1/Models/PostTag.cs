using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class PostTag
    {
        public int Id { get; set; }

        public int postId { get; set; }
        public int tagId { get; set; }

        public Post Post { get; set; }
        public Tag Tag { get; set; }
    }
}
