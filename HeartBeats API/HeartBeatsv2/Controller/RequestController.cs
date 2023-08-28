using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeartBeatsv2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private IRequest _request;

        public RequestController(IRequest request)
        {
            _request = request;
        }

        [HttpPost]
        public async Task<ActionResult<Donor>> AddRequest(Request request)
        {
            try
            {
               var req= await _request.AddRequest(request);
                return Ok(req);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet]
        public async Task<ActionResult<List<Request>>> GetRequest()
        {
            return await _request.GetRequest();
        }

        [HttpDelete]
        public async Task<ActionResult<Request>> DeleteRequestById(int id)
        {
            try
            {
               return await _request.DeleteRequestById(id);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
