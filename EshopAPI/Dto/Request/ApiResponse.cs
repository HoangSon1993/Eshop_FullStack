namespace EshopAPI.Dto.Request;

public class ApiResponse <T>
{
    public int code { get; set; } = 1000;
    public string message { get; set; }
    public T result { get; set; }
}