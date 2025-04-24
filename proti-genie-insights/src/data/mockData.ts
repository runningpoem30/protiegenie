
export interface Protein {
  id: string;
  name: string;
  description: string;
  function: string;
  structure: string;
  drugs: Drug[];
  diseases: Disease[];
  interactions: Interaction[];
  variants: Variant[];
}

export interface Drug {
  name: string;
  description: string;
}

export interface Disease {
  name: string;
  description: string;
}

export interface Interaction {
  protein: string;
  strength: 'strong' | 'medium' | 'weak';
  description: string;
}

export interface Variant {
  id: string;
  type: string;
  description: string;
  clinical: string;
}

export const mockProteins: Record<string, Protein> = {
  "TP53": {
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
  },
  "BRCA1": {
    id: "BRCA1",
    name: "Breast Cancer gene 1",
    description: "BRCA1 is a human tumor suppressor gene that produces the BRCA1 protein. This protein is involved in DNA repair, cell cycle checkpoint control, and maintenance of genomic stability.",
    function: "BRCA1 encodes a protein involved in DNA repair and tumor suppression. It helps repair damaged DNA and plays a role in ensuring the stability of each cell's genetic material.",
    structure: "https://cdn.rcsb.org/images/structures/1jm7_assembly-1.jpeg",
    drugs: [
      {
        name: "Olaparib",
        description: "A PARP inhibitor that exploits synthetic lethality in BRCA1-deficient cells."
      },
      {
        name: "Rucaparib",
        description: "Another PARP inhibitor approved for BRCA-mutated cancers."
      }
    ],
    diseases: [
      {
        name: "Hereditary Breast and Ovarian Cancer Syndrome",
        description: "Inherited mutations in BRCA1 significantly increase risk of breast and ovarian cancer."
      },
      {
        name: "Triple-negative breast cancer",
        description: "BRCA1 mutations are common in this aggressive form of breast cancer."
      }
    ],
    interactions: [
      {
        protein: "BARD1",
        strength: "strong",
        description: "Forms a heterodimer with BRCA1 that has ubiquitin ligase activity."
      },
      {
        protein: "RAD51",
        strength: "medium",
        description: "Interacts with BRCA1 in homologous recombination repair of DNA."
      },
      {
        protein: "BRCA2",
        strength: "medium",
        description: "Cooperates with BRCA1 in DNA repair and genome stability maintenance."
      },
      {
        protein: "TP53",
        strength: "medium",
        description: "BRCA1 and p53 coordinate in DNA damage response pathways."
      }
    ],
    variants: [
      {
        id: "rs80357906",
        type: "Frameshift",
        description: "185delAG mutation, a 2-bp deletion leading to premature stop codon",
        clinical: "Founder mutation common in Ashkenazi Jewish populations, high cancer risk"
      },
      {
        id: "rs80357508",
        type: "Nonsense",
        description: "C61G mutation disrupting the RING domain",
        clinical: "Associated with increased risk of breast and ovarian cancer"
      }
    ]
  },
  "EGFR": {
    id: "EGFR",
    name: "Epidermal Growth Factor Receptor",
    description: "EGFR is a transmembrane protein that is a receptor for members of the epidermal growth factor family of extracellular protein ligands. It triggers cell proliferation when activated.",
    function: "EGFR is a cell-surface receptor that binds to epidermal growth factors, triggering signals that promote cell growth, proliferation, and survival. It's crucial for normal tissue development and wound healing.",
    structure: "https://www.frontiersin.org/files/Articles/458042/fphar-10-00873-HTML/image_m/fphar-10-00873-g001.jpg",
    drugs: [
      {
        name: "Erlotinib",
        description: "A tyrosine kinase inhibitor that targets EGFR mutations."
      },
      {
        name: "Cetuximab",
        description: "A monoclonal antibody that binds to EGFR and blocks ligand binding."
      },
      {
        name: "Osimertinib",
        description: "A third-generation EGFR inhibitor effective against T790M resistance mutations."
      }
    ],
    diseases: [
      {
        name: "Non-small cell lung cancer",
        description: "EGFR mutations are found in 10-35% of cases, especially in non-smokers."
      },
      {
        name: "Glioblastoma",
        description: "Often shows EGFR amplification or the EGFRvIII variant."
      },
      {
        name: "Colorectal cancer",
        description: "EGFR overexpression is common and targeted by therapy."
      }
    ],
    interactions: [
      {
        protein: "GRB2",
        strength: "strong",
        description: "Adaptor protein that links EGFR to the Ras signaling pathway."
      },
      {
        protein: "SHC1",
        strength: "medium",
        description: "Adaptor protein involved in EGFR-mediated MAPK activation."
      },
      {
        protein: "CBL",
        strength: "medium",
        description: "E3 ubiquitin-protein ligase involved in EGFR downregulation."
      }
    ],
    variants: [
      {
        id: "rs121434568",
        type: "Missense",
        description: "L858R mutation in the kinase domain",
        clinical: "Common activating mutation in lung cancer, sensitive to EGFR TKIs"
      },
      {
        id: "T790M",
        type: "Missense",
        description: "Substitution at position 790, changing threonine to methionine",
        clinical: "Accounts for ~60% of acquired resistance to first-gen EGFR inhibitors"
      },
      {
        id: "EGFRvIII",
        type: "Deletion",
        description: "In-frame deletion of exons 2-7 resulting in constitutively active receptor",
        clinical: "Common in glioblastoma, associated with poor prognosis"
      }
    ]
  },
  "INS": {
    id: "INS",
    name: "Insulin",
    description: "The insulin gene provides instructions for producing the hormone insulin, which is crucial for regulating blood glucose levels in the body.",
    function: "INS encodes insulin, a peptide hormone produced by beta cells of the pancreas. Insulin regulates glucose metabolism by promoting the absorption of glucose from the blood into liver, fat, and skeletal muscle cells.",
    structure: "https://cdn.rcsb.org/images/rutgers/jc/1jca/1jca.pdb-500.jpg",
    drugs: [
      {
        name: "Metformin",
        description: "Increases insulin sensitivity in peripheral tissues."
      },
      {
        name: "Sulfonylureas",
        description: "Stimulate insulin release from pancreatic beta cells."
      },
      {
        name: "Insulin analogs",
        description: "Synthetic versions of insulin used for diabetes treatment."
      }
    ],
    diseases: [
      {
        name: "Diabetes mellitus type 1",
        description: "Autoimmune destruction of insulin-producing beta cells."
      },
      {
        name: "Diabetes mellitus type 2",
        description: "Progressive insulin resistance and inadequate insulin secretion."
      },
      {
        name: "Hyperinsulinism",
        description: "Excessive insulin secretion causing hypoglycemia."
      }
    ],
    interactions: [
      {
        protein: "INSR",
        strength: "strong",
        description: "Insulin receptor, primary target of insulin action."
      },
      {
        protein: "IGF1R",
        strength: "medium",
        description: "Insulin-like growth factor 1 receptor, can bind insulin with lower affinity."
      },
      {
        protein: "IRS1",
        strength: "medium",
        description: "Insulin receptor substrate 1, key mediator of insulin signaling."
      }
    ],
    variants: [
      {
        id: "rs121908276",
        type: "Missense",
        description: "R89C mutation, altering insulin's ability to bind to its receptor",
        clinical: "Associated with hyperinsulinemia and hyperproinsulinemia"
      },
      {
        id: "rs80356664",
        type: "Missense",
        description: "C96Y mutation in proinsulin, disrupting protein folding",
        clinical: "Causes permanent neonatal diabetes through beta-cell dysfunction"
      }
    ]
  }
};

export const exampleQueries = ["TP53", "BRCA1", "EGFR", "INS"];

export const getProtein = (id: string): Protein | undefined => {
  // Case-insensitive lookup
  const normalizedId = id.toUpperCase();
  return mockProteins[normalizedId] || undefined;
};
