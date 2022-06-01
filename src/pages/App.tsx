import React, { useState } from "react";
import Form from '../components/Form';
import List from '../components/List';
import Timer from "../components/Timer"
import { Itarefa } from "../types/ITarefa";
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas = {setTarefas}/>
      <List tarefas = {tarefas}/>
      <Timer />
    </div>
  );
}

export default App;
