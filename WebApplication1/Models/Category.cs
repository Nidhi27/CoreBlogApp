using System.Collections.Generic;

namespace WebApplication1.Models
{
    public class Category
    {
        public virtual int Id
        { get; set; }

        public virtual string Name
        { get; set; }

        public virtual IList<Post> Posts
        { get; set; }
    }
}