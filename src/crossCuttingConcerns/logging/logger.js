export  class BaseLogger
{
    log(data)
    {
        console.log("default logger"+data)
    }
}
export  class ElsaticLogger extends BaseLogger
{
    log(data) // bunu yazmasam baselogger gibi console.log("default logger"+data) gelirdi şimdi ezmiş olduk
    {
        console.log("logged to elastic"+data)
    }
}
export  class MongoLogger extends BaseLogger
{
    log(data)
    {
        console.log("logged to mongo"+data)
    }
}