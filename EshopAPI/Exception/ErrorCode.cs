namespace EshopAPI.Exception;

public enum ErrorCode
{
    UNCATEGORIZED_EXCEPTION = 999,
    INVALID_KEY = 10001,
    USER_EXISTED = 1002,
    USERNAME_INVALID = 1003,
    INVALID_PASSWORD = 1004
    
}

public static class ErrorCodeExtentions
{
    public static string GetMessage(this ErrorCode errorCode)
    {
        return errorCode switch
        {
            ErrorCode.UNCATEGORIZED_EXCEPTION => "Uncategorized exception error",
            ErrorCode.INVALID_KEY => "Invalid message key",
            ErrorCode.USER_EXISTED => "User existed",
            ErrorCode.USERNAME_INVALID => "Username must be at least 3 characters",
            ErrorCode.INVALID_PASSWORD => "Password must be at least 8 characters",
            _ => "Unknown error"
        };
    }
}