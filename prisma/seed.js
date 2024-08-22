const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Insert Activities
  await prisma.activity.createMany({
    data: [
      {
        title: "Ashrama Pooja",
        description:
          "శాంతి మరియు భోక్షణం | కష్టాలు తీరుటలో మనకు సహాయం చేసే పూజ. || అపరిమిత వాస్తవ్యములు | కోటి తృప్తికర అనుభవం ||",
      },
      {
        title: "Parihaara Pooja",
        description:
          "సకలమూ సరీగ బద్ధిత | కష్టాలు తీరుటలో సమర్థత || అన్యత్రగ సోదర వేదన | మరికొన్ని కృతజ్ఞత పూజలు ||",
      },
      {
        title: "Samaja Seva",
        description:
          "జన సేవలో క్రతువు | భక్తి మరియు సామాజిక కృషి || సకల సాంఘిక సేవలు | సహకరించు సేవలు ||",
      },
      {
        title: "Adhyatmikam",
        description:
          "కామః  క్రోధశ్చ, లోభశ్చ దేహే తిష్ఠతి తస్కరాః  || జ్ఞాన రత్నాపహారాయ | తస్మాత్ జాగ్రత  జాగ్రత ||",
      },
    ],
  });

  // Insert product
  await prisma.product.createMany({
    data: [
      {
        name: "Hand Bell",
        price: 240.0,
        imageUrl: "https://example.com/handbell.jpg",
      },
      {
        name: "Puja Thali",
        price: 120.0,
        imageUrl: "https://example.com/pujathali.jpg",
      },
      {
        name: "Candle Holder",
        price: 360.0,
        imageUrl: "https://example.com/candleholder.jpg",
      },
      {
        name: "Candle Bundle",
        price: 400.0,
        imageUrl: "https://example.com/candlebundle.jpg",
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
