using Microsoft.AspNetCore.Mvc;

namespace SwaggerDemo.Controllers
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
                "value1",
                "value2"
            });
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok($"value{id}");
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok("POST Executed");
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id)
        {
            return Ok($"PUT Executed {id}");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok($"DELETE Executed {id}");
        }
    }
}