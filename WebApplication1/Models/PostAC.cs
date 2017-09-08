using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class PostAC
    {
        public virtual int Id
        { get; set; }

        public virtual string Title
        { get; set; }

        public virtual string Content
        { get; set; }

        public virtual DateTime PostedOn
        { get; set; }

        public string UserName { get; set; }

        public  string Users_Id { get; set; }

        public virtual int Category_Id { get; set; }



    
        public List<int> TagIds { get; set; }




        public IList<PostTag> PostTags { get; set; }
    }
}
