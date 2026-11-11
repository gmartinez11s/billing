const vars = (dataform.projectConfig && dataform.projectConfig.vars) ? dataform.projectConfig.vars : {};
const config = {
  "foundation": {
    "erp": {
      "targetProjectId": (vars["cortex_datasets_sap_foundation_projectId"] || "YOUR_TARGET_PROJECT_ID"),
      "targetDatasetId": (vars["cortex_datasets_sap_foundation_datasetId"] || "cortex7_sap_data_foundation")
    }
  },
  "product": {
    "sap_cortex_v6_compatibility_master_data": {
      "targetProjectId": (vars["cortex_datasets_cortex_v6_compatibility_target_projectId"] || "YOUR_TARGET_PROJECT_ID"),
      "targetDatasetId": (vars["cortex_datasets_cortex_v6_compatibility_target_datasetId"] || "cortex_v6_compatibility"),
      "sources": {
        "sapModule": {
          "projectId": (vars["cortex_datasets_sap_foundation_projectId"] || "YOUR_TARGET_PROJECT_ID"),
          "datasetId": (vars["cortex_datasets_sap_foundation_datasetId"] || "cortex7_sap_data_foundation")
        }
      }
    },
    "sap_cortex_v6_compatibility_sales": {
      "targetProjectId": (vars["cortex_datasets_cortex_v6_compatibility_target_projectId"] || "YOUR_TARGET_PROJECT_ID"),
      "targetDatasetId": (vars["cortex_datasets_cortex_v6_compatibility_target_datasetId"] || "cortex_v6_compatibility"),
      "sources": {
        "sapModule": {
          "projectId": (vars["cortex_datasets_sap_foundation_projectId"] || "YOUR_TARGET_PROJECT_ID"),
          "datasetId": (vars["cortex_datasets_sap_foundation_datasetId"] || "cortex7_sap_data_foundation")
        },
        "sapMasterData": {
          "projectId": (vars["cortex_datasets_cortex_v6_compatibility_target_projectId"] || "YOUR_TARGET_PROJECT_ID"),
          "datasetId": (vars["cortex_datasets_cortex_v6_compatibility_target_datasetId"] || "cortex_v6_compatibility")
        }
      }
    }
  }
};
global.config = config;
module.exports = config;
