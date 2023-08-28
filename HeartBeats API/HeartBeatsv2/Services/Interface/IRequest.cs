using HeartBeatsv2.Models;

namespace HeartBeatsv2.Services.Interface
{
    public interface IRequest
    {
        public Task<Request> AddRequest(Request request);
        public Task<List<Request>> GetRequest();
        public Task<Request> DeleteRequestById(int id);
    }
}
