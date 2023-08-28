using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeartBeatsv2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private IReport _report;

        public ReportController(IReport report)
        {
            _report = report;
        }

        [HttpGet]
        public async Task<ActionResult<List<Report>>> GetReport()
        {
            try
            {
                var lst = await _report.GetReport();
                return lst;
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        public async Task<ActionResult<Report>> AddReport(Report report)
        {
            try
            {
                var repo = await _report.AddReport(report);
                return repo;
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       
    }
}
