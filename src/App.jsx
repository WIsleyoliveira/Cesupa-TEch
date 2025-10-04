import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Palestras');

  const eventsData = {
    Palestras: [
      { id: 1, time: '09:30h - 10:30h', title: 'Rota Norte da IA: Por que o AI Center da VALE em Belém muda o mapa da inovação para o mundo.', location: 'Auditório', speaker: 'VALE', color: 'bg-amber-600' },
      { id: 2, time: '11:00h - 12:00h', title: 'Do CESUPA pro Squad: Trajetórias reais de alunos contratados pela DTI.', location: 'Auditório', speaker: 'DTI', color: 'bg-blue-600' },
      { id: 3, time: '14:00h - 15:00h', title: 'Customer 360 com propósito: como Accenture acelera valor no Salesforce.', location: 'Auditório', speaker: 'Accenture', color: 'bg-green-600' },
      { id: 4, time: '15:00h - 16:00h', title: 'Construindo Espaços: A relevância da BELJOGOS no cenário GameDev BR.', location: 'Auditório', speaker: 'BELJOGOS', color: 'bg-red-600' },
      { id: 5, time: '16:00h - 17:00h', title: 'Porto Digital de Recife: Como criar um Polo de Referência em Inovação.', location: 'Auditório', speaker: 'Porto Digital', color: 'bg-pink-600' },
      { id: 6, time: '17:00h - 18:00h', title: 'Computação Verde: Inteligência artificial para monitorar e conservar a biodiversidade amazônica.', location: 'Auditório', speaker: 'Vitor H. Gomes', color: 'bg-purple-600' }
    ],
    Oficinas: [
      { id: 7, time: '10:00h - 12:30h', title: 'Automações Inteligentes para Apps Mobile', location: 'Lab 10 - Escritório de Engenharia', speaker: 'Equipe Engenharia', color: 'bg-indigo-600' },
      { id: 8, time: '10:30h - 12:30h', title: 'Quantum 101', location: 'Lab 08', speaker: 'Feynman', color: 'bg-red-600' },
      { id: 9, time: '14:00h - 17:00h', title: 'Mini Maratona de Programação', location: 'Subsolo', speaker: 'Feynman', color: 'bg-yellow-600' },
      { id: 10, time: '17:30h - 19:30h', title: 'CyberSec: Gestão de Ciclo de Vida de Vulnerabilidades em Aplicações', location: 'Lab 08', speaker: 'SiTech', color: 'bg-green-600' },
      { id: 11, time: '17:30h - 20:30h', title: 'Inteligência de Enxames: Computação Bioinspirada para Otimização de Problemas', location: 'Subsolo', speaker: 'Feynman', color: 'bg-blue-600' }
    ],
    Evento: [
      { id: 12, time: '09:00h - 20:30h', title: 'Evento IARAS', location: 'Térreo', color: 'bg-fuchsia-600' }
    ],
    Campeonatos: [
      { id: 13, time: '21:00h - 22:00h', title: 'Campeonatos', games: ['XADREZ', 'PING-PONG', 'PEBOLIM'], location: 'Térreo', color: 'bg-orange-700' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
              CESUPA TECH<br />
              <span className="text-white">SUMMIT</span>
            </h1>
            <div className="flex gap-4 mt-4">
              <div className="bg-blue-700 px-4 py-2 rounded-md">14 Outubro</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {Object.keys(eventsData).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 mx-2 rounded-md transition-colors ${
                activeTab === tab 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-purple-700 hover:bg-purple-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {eventsData[activeTab].map((event) => (
            <div key={event.id} className={`p-4 rounded-lg ${event.color}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold">{event.time}</span>
                {event.games && (
                  <div className="flex gap-2 flex-wrap">
                    {event.games.map((game, index) => (
                      <span key={index} className="text-xs bg-white text-black px-2 py-1 rounded">
                        {game}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              {event.speaker && <p className="text-sm opacity-90">{event.speaker}</p>}
              <p className="text-xs mt-1">{event.location}</p>
            </div>
          ))}
        </div>

        {/* QR */}
        <div className="bg-blue-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Acesse o site do evento</h2>
          <p className="mb-6">Escaneie o QR Code para acessar a página oficial</p>
          <div className="flex justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://tickzi.com.br/eventos/cesupatechsummit" 
              alt="QR Code CESUPA TECH SUMMIT" 
              className="w-48 h-48 border-4 border-white rounded-lg"
            />
          </div>
          <p className="mt-4 text-blue-200">https://tickzi.com.br/eventos/cesupatechsummit</p>
        </div>
      </div>
    </div>
  );
};

export default App;
