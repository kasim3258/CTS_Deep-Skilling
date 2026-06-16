using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[]
            {
                "Value1",
                "Value2"
            });
        }

        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok($"Received: {value}");
        }

        [HttpPut]
        public IActionResult Put(int id, [FromBody] string value)
        {
            return Ok($"Updated {id} with {value}");
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok($"Deleted {id}");
        }
    }
}