using NUnit.Framework;
using Moq;

[TestFixture]
public class CustomerCommTests
{
    private Mock<IMailSender> _mockMailSender;

    [OneTimeSetUp]
    public void Init()
    {
        _mockMailSender = new Mock<IMailSender>();

        _mockMailSender
            .Setup(x => x.SendMail(
                It.IsAny<string>(),
                It.IsAny<string>()))
            .Returns(true);
    }

    [Test]
    public void SendMailToCustomer_ReturnsTrue()
    {
        var customer =
            new CustomerComm(_mockMailSender.Object);

        bool result =
            customer.SendMailToCustomer();

        Assert.That(result, Is.True);
    }
}