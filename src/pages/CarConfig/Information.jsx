import React, { useState } from "react";
import { Collapse, Select } from "antd";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;
const { Option } = Select;

// Shared structure (panel titles + features)
const panelStructure = [
  {
    headerKey: "information.panels.0.header",
    items: [
      "information.panels.0.items.0",
      "information.panels.0.items.1",
      "information.panels.0.items.2",
      "information.panels.0.items.3",
      "information.panels.0.items.4",
      "information.panels.0.items.5",
      "information.panels.0.items.6",
      "information.panels.0.items.7",
      "information.panels.0.items.8",
    ],
  },
  {
    headerKey: "information.panels.1.header",
    items: [
      "information.panels.1.items.0",
      "information.panels.1.items.1",
      "information.panels.1.items.2",
      "information.panels.1.items.3",
      "information.panels.1.items.4",
      "information.panels.1.items.5",
      "information.panels.1.items.6",
      "information.panels.1.items.7",
      "information.panels.1.items.8",
      "information.panels.1.items.9",
      "information.panels.1.items.10",
      "information.panels.1.items.11",
      "information.panels.1.items.12",
      "information.panels.1.items.13",
    ],
  },
  {
    headerKey: "information.panels.2.header",
    items: [
      "information.panels.2.items.0",
      "information.panels.2.items.1",
      "information.panels.2.items.2",
      "information.panels.2.items.3",
      "information.panels.2.items.4",
      "information.panels.2.items.5",
      "information.panels.2.items.6",
      "information.panels.2.items.7",
      "information.panels.2.items.8",
      "information.panels.2.items.9",
      "information.panels.2.items.10",
      "information.panels.2.items.11",
      "information.panels.2.items.12",
    ],
  },
  {
    headerKey: "information.panels.3.header",
    items: [
      "information.panels.3.items.0",
      "information.panels.3.items.1",
      "information.panels.3.items.2",
      "information.panels.3.items.3",
      "information.panels.3.items.4",
      "information.panels.3.items.5",
    ],
  },
  {
    headerKey: "information.panels.4.header",
    items: [
      "information.panels.4.items.0",
      "information.panels.4.items.1",
      "information.panels.4.items.2",
      "information.panels.4.items.3",
      "information.panels.4.items.4",
      "information.panels.4.items.5",
      "information.panels.4.items.6",
    ],
  },
  {
    headerKey: "information.panels.5.header",
    items: [
      "information.panels.5.items.0",
      "information.panels.5.items.1",
      "information.panels.5.items.2",
      "information.panels.5.items.3",
    ],
  },
  {
    headerKey: "information.panels.6.header",
    items: [
      "information.panels.6.items.0",
      "information.panels.6.items.1",
      "information.panels.6.items.2",
      "information.panels.6.items.3",
      "information.panels.6.items.4",
    ],
  },
  {
    headerKey: "information.panels.7.header",
    items: [
      "information.panels.7.items.0",
      "information.panels.7.items.1",
      "information.panels.7.items.2",
      "information.panels.7.items.3",
      "information.panels.7.items.4",
    ],
  },
];

// Values for Model 1
const model1Values = [
  [
    "4858*1925*1780",
    "2850",
    "197/5500",
    "290/2000~4000",
    "7DCT",
    "Shamollatilgan disk/disk",
    "EPB+AUTO HOLD",
    "R20(Michelin)",
    "●",
  ],
  [
    "4",
    "●",
    "●",
    "●",
    "●",
    "●",
    "information.features.leather",
    "●",
    "●",
    "2/4",
    "●",
    "●/●",
    "●/●",
    "●",
  ],
  [
    "information.features.leather",
    "-",
    "information.features.6way",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "-",
    "●",
  ],
  ["●", "◎", "8(SONY)", "●", "●", "●"],
  ["●", "●", "●", "●", "●", "●", "●"],
  ["●", "●", "●", "●"],
  ["●", "●", "●", "●", "●"],
  ["●", "●", "●", "●", "●"],
];

// Values for Model 2
const model2Values = [
  [
    "4",
    "●",
    "●",
    "●",
    "●",
    "●",
    "information.features.leather",
    "●",
    "●",
    "2/4",
    "●",
    "●/●",
    "●/●",
    "●",
  ],
  [
    "4",
    "●",
    "●",
    "●",
    "●",
    "●",
    "information.features.leather",
    "●",
    "●",
    "2/4",
    "●",
    "●/●",
    "●/●",
    "●",
  ],
  [
    "information.features.artificialLeather",
    "-",
    "information.features.6way",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "●",
    "-",
    "●",
  ],
  ["●", "◎", "8(SONY)", "●", "●", "●"],
  ["●", "●", "●", "●", "●", "●", "●"],
  ["●", "●", "●", "-"],
  ["-", "-", "-", "-", "-"],
  ["●", "●", "●", "●", "●"],
];

// Model-to-values map
const valueMap = {
  model1: model1Values,
  model2: model2Values,
};

const Information = () => {
  const { t } = useTranslation("information");
  const [selectedModel, setSelectedModel] = useState("model1");

  const handleCollapseChange = (activeKeys) => {
    console.log("Active panel keys:", activeKeys);
  };

  return (
    <div className="w-full max-w-[1220px] mx-auto p-4">
      {/* Responsive dropdown */}
      <div className="mb-6 w-full max-w-[300px] mx-auto md:mx-0">
        <Select
          value={selectedModel}
          onChange={setSelectedModel}
          className="w-full"
        >
          <Option value="model1">{t("information.models.model1")}</Option>
          <Option value="model2">{t("information.models.model2")}</Option>
        </Select>
      </div>

      {/* Responsive Collapse */}
      <Collapse
        defaultActiveKey={["0"]}
        onChange={handleCollapseChange}
        accordion
        className="w-full"
      >
        {panelStructure.map((panel, panelIndex) => (
          <Panel
            key={panelIndex}
            header={
              <span className="text-white text-[14px] md:text-[16px] font-bold">
                {t(panel.headerKey)}
              </span>
            }
            className="!bg-[#9a7e7e] text-black rounded-md overflow-hidden"
          >
            {panel.items.map((itemKey, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row justify-between items-start text-[#384c61] border-b border-gray-200 px-4 py-2"
              >
                <p className="w-full md:w-[60%] lg:w-[70%] mb-1 md:mb-0">
                  {t(itemKey)}
                </p>
                <p className="w-full md:w-[40%] lg:w-[30%] font-semibold break-words text-right md:text-left">
                  {t(valueMap[selectedModel][panelIndex][itemIndex], {
                    defaultValue:
                      valueMap[selectedModel][panelIndex][itemIndex],
                  })}
                </p>
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Information;
