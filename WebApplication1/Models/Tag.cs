using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
   
        public class Tag
        {
            public virtual int Id
            { get; set; }

            public virtual string Name
            { get; set; }

          
            public IList<PostTag> PostTags { get; set; }
        }
 
}
