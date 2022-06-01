import React, { useState } from "react";
import Form from '../components/Form';
import List from '../components/List';
import Timer from "../components/Timer"
import { Itarefa } from "../types/ITarefa";
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas = {setTarefas}/>
      <List 
        tarefas = {tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer selecionado={selecionado} />
    </div>
  );
}

export default App;
