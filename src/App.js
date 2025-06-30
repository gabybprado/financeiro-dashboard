// App.js
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './App.css'; // pode ser usado para estilos adicionais se quiser

const data = [
  { name: 'Moradia', value: 4000, color: '#3B82F6' },
  { name: 'Transporte', value: 1500, color: '#10B981' },
  { name: 'Alimentação', value: 1750, color: '#60A5FA' },
  { name: 'Saúde', value: 1000, color: '#F59E0B' },
];

const transactions = [
  { title: 'Supermercado', date: '22/04/2024' },
  { title: 'Salário', date: '20/04/2024' },
  { title: 'Aluguel', date: '10/04/2024' },
  { title: 'Farmácia', date: '05/04/2024' },
];

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <div style={{ maxWidth: 400, margin: '0 auto', background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>FINANCEIRO</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 8 }}>André</span>
            <img src="https://i.pravatar.cc/40" alt="avatar" style={{ borderRadius: '50%' }} />
          </div>
        </div>

        <div style={{ textAlign: 'left', margin: '16px 0', background: '#f3f4f6', padding: 16, borderRadius: 12 }}>
          <p>Saldo Total</p>
          <p style={{fontSize: 14, color: '#666', textAlign: 'right', margin: '-35px 0'}}>Abril 2024</p>
          <h1 style={{ fontSize: 28, margin: '40px 0'}}>R$ 25.200</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ flex: 1, textAlign: 'center', padding: 10, marginRight: 8, border: '1px solid #ddd', borderRadius: 10 }}>
            <p>Receitas</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>R$ 10.000</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center', padding: 10, marginLeft: 8, border: '1px solid #ddd', borderRadius: 10 }}>
            <p>Despesas</p>
            <p style={{ color: 'red', fontWeight: 'bold' }}>R$ 8.250</p>
          </div>
        </div>

        <h3>Despesas por Categoria</h3>
        <PieChart width={300} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <ul>
          {data.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, display: 'inline-block', marginRight: 8 }}></span>
              {item.name}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: 20 }}>Últimas Transações</h3>
        <ul>
          {transactions.map((t, i) => (
            <li key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '4px 0' }}>
              <span>{t.title}</span>
              <span style={{ color: '#666' }}>{t.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
