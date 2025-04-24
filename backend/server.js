// server.js or index.js

const express = require("express")
const cors = require("cors")

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

const mockProteins = [
  {
    id: "P12345",
    name: "Hemoglobin subunit beta",
    description: "protein involved in oxygen transport",
    function: "It carries oxygen from the lungs to the body tissues.",
    structure: "https://cdn.rcsb.org/images/structures/1jm7_assembly-1.jpeg",
    drugs: [
      { name: "Hydroxyurea" },
      { name: "Voxelotor" }
    ],
    diseases: [
      { name: "Sickle Cell Disease" },
      { name: "Beta-thalassemia" }
    ],
    interactions: [
      { protein: "Hemoglobin alpha" },
      { protein: "Heme" },
      { protein: "2,3-BPG" },
      { protein: "Carbon Monoxide" }
    ]
  },
  {
    id: "P67890",
    name: "TP53 Tumor Protein",
    description: "a crucial tumor suppressor protein",
    function: "Regulates the cell cycle and helps prevent cancer.",
    structure: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-018-36923-x/MediaObjects/41598_2018_36923_Fig1_HTML.png",
    drugs: [
      { name: "Nutlin-3" },
      { name: "PRIMA-1" }
    ],
    diseases: [
      { name: "Li-Fraumeni syndrome" },
      { name: "Various cancers" }
    ],
    interactions: [
      { protein: "MDM2" },
      { protein: "ATM" },
      { protein: "BRCA1" }
    ]
  },
  {
    id: "P678907",
    name: "arya",
    description: "a crucial tumor suppressor protein",
    function: "Regulates the cell cycle and helps prevent cancer.",
    structure: "https://via.placeholder.com/400x300.png?text=TP53+Structure",
    drugs: [
      { name: "Nutlin-3" },
      { name: "PRIMA-1" }
    ],
    diseases: [
      { name: "Li-Fraumeni syndrome" },
      { name: "Various cancers" }
    ],
    interactions: [
      { protein: "MDM2" },
      { protein: "ATM" },
      { protein: "BRCA1" }
    ]
  },
  {
    id: "TP53",
    name: "Tumor protein p53",
    description: "TP53 is a crucial tumor suppressor gene. It encodes p53 protein that regulates the cell cycle and functions as a tumor suppressor that conserves stability by preventing genome mutation.",
    function: "TP53 encodes a tumor suppressor protein involved in preventing cancer. It regulates the cell cycle and promotes apoptosis (programmed cell death) when DNA damage is irreparable.",
    structure: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-018-36923-x/MediaObjects/41598_2018_36923_Fig1_HTML.png",
    drugs: [
      {
        name: "Doxorubicin",
        description: "An anthracycline antibiotic that can restore p53 function in some cancer cells."
      },
      {
        name: "Nutlin-3",
        description: "A small molecule that inhibits MDM2-p53 interaction, allowing p53 to function."
      }
    ],
    diseases: [
      {
        name: "Li-Fraumeni syndrome",
        description: "A rare disorder that increases the risk of developing several types of cancer, caused by germline TP53 mutations."
      },
      {
        name: "Various carcinomas",
        description: "TP53 is mutated in about 50% of all human cancers, including lung, colorectal, and breast cancers."
      }
    ],
    interactions: [
      {
        protein: "MDM2",
        strength: "strong",
        description: "MDM2 is a negative regulator of p53, binding to it and targeting it for degradation."
      },
      {
        protein: "BAX",
        strength: "medium",
        description: "BAX is a pro-apoptotic protein that is upregulated by p53 during stress response."
      },
      {
        protein: "ATM",
        strength: "medium",
        description: "ATM activates p53 in response to DNA damage, particularly double-strand breaks."
      },
      {
        protein: "CDKN1A",
        strength: "medium",
        description: "Also known as p21, it's a cyclin-dependent kinase inhibitor regulated by p53."
      },
      {
        protein: "PUMA",
        strength: "medium",
        description: "A pro-apoptotic protein that is induced by p53 in response to cellular stress."
      }
    ],
    variants: [
      {
        id: "rs1042522",
        type: "Missense",
        description: "R72P variant that changes an arginine to proline at position 72",
        clinical: "Associated with altered cancer risk and response to chemotherapy"
      },
      {
        id: "rs28934578",
        type: "Frameshift",
        description: "A deletion that causes a frameshift mutation",
        clinical: "Strongly linked to Li-Fraumeni syndrome"
      },
      {
        id: "rs121913343",
        type: "Missense",
        description: "R175H variant that disrupts protein folding",
        clinical: "Common in many cancer types, associated with poor prognosis"
      }
    ]
  }
  
];
app.get('/api/proteins' , (req ,res) => {
  const protein  = mockProteins
  res.send(protein)
})
app.get("/api/proteins/:id", (req, res) => {
  console.log("api works")
  const { id } = req.params;
  const protein = mockProteins.find(p => p.name.toLowerCase() === id.toLowerCase());
  console.log(mockProteins)
  if (!protein) {
    return res.status(404).json({ error: "Protein not found" });
  }
  res.json(protein);
});


app.get("/api/proteins/network/:id", (req, res) => {
  console.log("api works")
  const { id } = req.params;
  const protein = mockProteins.find(p => p.id.toLowerCase() === id.toLowerCase());
  if (!protein) {
    return res.status(404).json({ error: "Protein not found" });
  }
  res.json(protein);
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
