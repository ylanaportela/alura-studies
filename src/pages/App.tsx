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

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas = {setTarefas}/>
      <List 
        tarefas = {tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
