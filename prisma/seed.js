const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Ashrama = "/imagdata/activity/ashrama.png";
const pariharapuja = "/imagdata/activity/pariharapuja.png";
const bell = "/imagdata/product/bell.png";
const thali = "/imagdata/product/thali.png";
const candleholder = "/imagdata/product/candleholder.png";
const candlebundle = "/imagdata/product/candlebundle.png";
const Janmashtami = "/imagdata/events/janmashtami.png";
const vinayaka = "/imagdata/events/vinayakachavithi.png";
const Durga = "/imagdata/events/durgapooja.png";
const Diwali = "/imagdata/events/diwali.png";
const Santhosi = "/imagdata/posts/footer-1.jpeg";
const khali = "/imagdata/posts/footer-2.jpeg";
const pooja = "/imagdata/posts/footer-3.jpeg";

async function main() {
  await prisma.activity.createMany({
    data: [
      {
        title: "Ashrama Pooja",
        image: Ashrama,
        color: "#7E4555",
        description:
          "శాంతి మరియు భోక్షణం | కష్టాలు తీరుటలో మనకు సహాయం చేసే పూజ. || అపరిమిత వాస్తవ్యములు | కోటి తృప్తికర అనుభవం ||",
      },
      {
        title: "Parihaara Pooja",
        image: pariharapuja,
        color: "#DB4212",
        description:
          "సకలమూ సరీగ బద్ధిత | కష్టాలు తీరుటలో సమర్థత || అన్యత్రగ సోదర వేదన | మరికొన్ని కృతజ్ఞత పూజలు ||",
      },
      {
        title: "Samaja Seva",
        image: pariharapuja,
        color: "#6D9084",
        description:
          "జన సేవలో క్రతువు | భక్తి మరియు సామాజిక కృషి || సకల సాంఘిక సేవలు | సహకరించు సేవలు ||",
      },
      {
        title: "Adhyatmikam",
        image: pariharapuja,
        color: "#B38A4B",
        description:
          "కామః  క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః  || జ్ఞాన రత్నాపహారాయ | తస్మాత్ జాగ్రత  జాగ్రత ||",
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        title: "Hand Bell",
        price: 140.0,
        image: bell,
        qty: "0",
      },
      {
        title: "Puja Thali",
        price: 120.0,
        image: thali,
        qty: "0",
      },
      {
        title: "Candle Holder",
        price: 160.0,
        image: candleholder,
        qty: "0",
      },
      {
        title: "Candle Bundle",
        price: 180.0,
        image: candlebundle,
        qty: "0",
      },
      {
        title: "Hand Bell",
        price: 140.0,
        image: bell,
        qty: "0",
      },
      {
        title: "Puja Thali",
        price: 120.0,
        image: thali,
        qty: "0",
      },
      {
        title: "Candle Holder",
        price: 160.0,
        image: candleholder,
        qty: "0",
      },
      {
        title: "Candle Bundle",
        price: 180.0,
        image: candlebundle,
        qty: "0",
      },
    ],
  });
  await prisma.event.createMany({
    data: [
      {
        title: "Janmashtami",
        description: "Celebrating the birth of Lord Krishna",
        eventDate: new Date("2024-08-20T10:00:00Z"),
        image: Janmashtami,
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Ganesh Chaturthi",
        description: "Celebrating the birth of Lord Ganesha",
        eventDate: new Date("2024-09-07T18:00:00Z"),
        image: vinayaka,
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Dussehra",
        description: "Celebrating the victory of good over evil",
        eventDate: new Date("2024-10-13T18:00:00Z"),
        image: Durga,
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Deepawali",
        description: "Festival of Lights",
        eventDate: new Date("2024-11-01T18:00:00Z"),
        image: Diwali,
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Sankarnthi",
        description:
          "This event is completely makes your spiritual and pshysical senses more pure and accurate",
        image: Janmashtami,
        eventDate: new Date("1-nov-2023"),
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Vugadhi",
        description: "This event is newly celebrate and former ",
        image: Janmashtami,
        eventDate: new Date("11-nov-2023"),
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Sivarathri",
        description: "This event is shivudi puja celebration",
        image: Durga,
        eventDate: new Date("23-nov-2023"),
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "Onam",
        description: "This event is lakshmi puja celebration",
        image: Janmashtami,
        eventDate: new Date("23-nov-2024"),
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
      {
        title: "deepavali",
        description: "This event is lakshi  puja celebration",
        image: Durga,
        eventDate: new Date("1-nov-2022"),
        youtubeLink: "https://youtube.com/watch?v=someVideo",
      },
    ],
  });

  await prisma.post.createMany({
    data: [
      {
        title: "Santhosi Pooja",
        description: "A holy pooja for Santhosi Maa.",
        date: new Date("2024-05-30T00:00:00Z"),
        image: Santhosi,
      },
      {
        title: "Kali Pooja",
        description: "Dedicated to the goddess Kali.",
        date: new Date("2024-05-30T00:00:00Z"),
        image: khali,
      },
      {
        title: "Durga Pooja",
        description: "A celebration of goddess Durga.",
        date: new Date("2024-05-30T00:00:00Z"),
        image: pooja,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
