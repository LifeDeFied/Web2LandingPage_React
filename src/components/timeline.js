import { Column, Text, useWindowSize } from "./ui/utils";
import { Chrono } from "react-chrono";

export default function Timeline() {
  const size = useWindowSize();
  const items = [
    {
      title: "2022 Q2",
      cardTitle: "\n\t2022 Q2\n\n",
    //   url: "http://www.history.com",
      cardSubtitle:
        "\t- WhitepaperV1 π\n \t- Early Whitelisting β\n \t- Startup with Chainlink π\n \t- Ignite Startup Program π₯\n \t- First Round of Funding π°\n \t- Onboard KEY Team Members π",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "http://someurl/image.jpg",
    //     },
    //   },
    },
    {
      title: "2022 Q3",
      cardTitle: "\n\t2022 Q3\n\n",
      cardSubtitle:
        "\t- HomeTree Beta π³\n \t- ChainBranch Beta πΏ\n \t- Strategic Partnerships π€ \n \t- Community Development π₯ \n \t- 1st Presale Announced π’ \n \t- Tokenized BranchApp Beta πΈ ",
    },
    {
      title: "2022 Q4",
      cardTitle: "\n\t2022 Q4\n\n",
      cardSubtitle:
        "\t- HEXTree Betaπ\n \t- LiquidityTree Beta π§\n \t- BranchMarket Beta π\n \t- BranchApp Wallet Betaπ±\n \t- Allocation of 1st Presale πΈ\n \t- 2nd Presale Announced π’",
    },
    {
      title: "2023 Q1",
      cardTitle: "\n\t2023 Q1\n\n",
      cardSubtitle:
        "\t- Public ICO Begins π\n \t- C2FπNetwork Testnet\n \t- Bug Bounty Program π \n \t- H#SHira Security Auditing π\n \t- Allocation of 2nd Presale πΈ\n \t- BranchApp Voting Begins β",
    },
    {
      title: "2023 Q2",
      cardTitle: "\n\t2023 Q2\n\n",
      cardSubtitle:"\t- Public ICO Ends π\n \t- Allocation of Public ICO πΈ\n \t- C2FπNetwork Mainnet\n \t- Global C2FπNetwork Begins"
    },
  ];

  return (
    <Column backgroundColor="#08183A" id='roadmap' paddingTop='0px' paddingBottom='70px'>
      <Text 
      fontSize={size.width > 800 ?"40px": "30px"}
      textAlign="center" maxWidth='100vw' width='100%' fontWeight="bold" color='rgba(255,255,255,0.8)' marginBottom='50px'>Roadmap</Text>
      <div style={{whiteSpace: "pre-wrap" }}>
      <Chrono
        items={items}
        theme={{
          // primary: "rgba(0,0,0,0.7)",
          primary: "rgba(253,94,83,1)",
          // secondary: "rgba(255,255,255,0.7)",
          secondary: "rgba(255,255,255,1)",
          // cardBgColor: "rgba(255,255,255,0.9)",
          cardBgColor: "rgba(255,255,255,1)",
          // cardForeColor: "rgba(0,0,0,0.8)",
          cardForeColor: "rgba(0,0,0,1)",
          titleColor: "rgba(253,94,83,1)",
          textColor: "rgba(255,255,255,1)",
        }}
        mode={size.width > 800 ? "VERTICAL_ALTERNATING" : "VERTICAL"}
        slideItemDuration={2000}
        scrollable={{ scrollbar: true }}
        showNavigation={false}
      />
      </div>
    </Column>
  );
}
