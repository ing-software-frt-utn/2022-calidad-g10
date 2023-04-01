import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addModel, deleteModel, getModels, putModels } from "../../Services/ModelServices";
import ModelForm from "./ModelForm";
import ModelTable from "./ModelTable";

export default function ManageModels() {
  const [editingModel, setEditingModel] = useState(null);
  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels(setModels);
  }, [models]);

  const handleEdit = (model) => {
    setEditingModel(model);
  };

  const handleDelete = (model) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este modelo?")) {
      deleteModel(model);
    }
  };

  const handleEditSubmit = (editedModel) => {
    putModels(editedModel, setEditingModel, models, setModels);
  };

  const handleAddSubmit = (model) => {
    addModel(model);
    setEditingModel({ sku: '', descripcion: '', limiteInferiorReproceso: 0, limiteSuperiorReproceso: 0, limiteInferiorObservado: 0, limiteSuperiorObservado: 0, id: 0 });
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ p: 2, pt: 2 }}>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <ModelForm
            onAdd={handleAddSubmit}
            onEdit={handleEditSubmit}
            initialModel={editingModel}
            onCancel={() => setEditingModel(null)}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <ModelTable
            models={models}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </div>

  );
};
