'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, Mail, Phone, Calendar, MapPin, Users, Clock } from 'lucide-react';

interface Orcamento {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  origem: string;
  destino: string;
  dataViagem: string;
  numeroPassageiros: number;
  observacoes: string;
  status: 'pendente' | 'respondido' | 'finalizado';
  dataEnvio: string;
}

const orcamentosExemplo: Orcamento[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    servico: 'Fretamento Executivo',
    origem: 'São Paulo - SP',
    destino: 'Campinas - SP',
    dataViagem: '2024-02-15',
    numeroPassageiros: 25,
    observacoes: 'Viagem corporativa para evento',
    status: 'pendente',
    dataEnvio: '2024-01-20'
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria@email.com',
    telefone: '(11) 88888-8888',
    servico: 'Turismo',
    origem: 'Rio de Janeiro - RJ',
    destino: 'Búzios - RJ',
    dataViagem: '2024-02-20',
    numeroPassageiros: 15,
    observacoes: 'Excursão de fim de semana',
    status: 'respondido',
    dataEnvio: '2024-01-18'
  },
  {
    id: '3',
    nome: 'Carlos Oliveira',
    email: 'carlos@email.com',
    telefone: '(11) 77777-7777',
    servico: 'Transporte Escolar',
    origem: 'Guarulhos - SP',
    destino: 'São Paulo - SP',
    dataViagem: '2024-02-01',
    numeroPassageiros: 40,
    observacoes: 'Transporte diário para escola',
    status: 'finalizado',
    dataEnvio: '2024-01-15'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'respondido':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'finalizado':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'pendente':
      return 'Pendente';
    case 'respondido':
      return 'Respondido';
    case 'finalizado':
      return 'Finalizado';
    default:
      return status;
  }
};

export default function OrcamentosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>(orcamentosExemplo);
  const [selectedOrcamento, setSelectedOrcamento] = useState<Orcamento | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || session.user?.role !== 'admin') {
      router.push('/admin/login');
      return;
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'admin') {
    return null;
  }

  const updateStatus = (id: string, newStatus: 'pendente' | 'respondido' | 'finalizado') => {
    setOrcamentos(prev => 
      prev.map(orc => 
        orc.id === id ? { ...orc, status: newStatus } : orc
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Orçamentos</h1>
          <p className="text-gray-600 mt-2">Gerencie todos os orçamentos recebidos</p>
        </div>

        {!selectedOrcamento ? (
          <div className="space-y-6">
            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total</p>
                      <p className="text-2xl font-bold text-gray-900">{orcamentos.length}</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pendentes</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {orcamentos.filter(o => o.status === 'pendente').length}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Respondidos</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {orcamentos.filter(o => o.status === 'respondido').length}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Finalizados</p>
                      <p className="text-2xl font-bold text-green-600">
                        {orcamentos.filter(o => o.status === 'finalizado').length}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lista de Orçamentos */}
            <Card>
              <CardHeader>
                <CardTitle>Orçamentos Recebidos</CardTitle>
                <CardDescription>
                  Lista de todos os orçamentos solicitados pelos clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orcamentos.map((orcamento) => (
                    <div
                      key={orcamento.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{orcamento.nome}</h3>
                            <Badge className={getStatusColor(orcamento.status)}>
                              {getStatusText(orcamento.status)}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {orcamento.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {orcamento.telefone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(orcamento.dataViagem).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">{orcamento.servico}</span> • 
                            {orcamento.origem} → {orcamento.destino} • 
                            {orcamento.numeroPassageiros} passageiros
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedOrcamento(orcamento)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Detalhes do Orçamento */
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setSelectedOrcamento(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar à Lista
              </Button>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Detalhes do Orçamento #{selectedOrcamento.id}</CardTitle>
                    <CardDescription>
                      Enviado em {new Date(selectedOrcamento.dataEnvio).toLocaleDateString('pt-BR')}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(selectedOrcamento.status)}>
                    {getStatusText(selectedOrcamento.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Informações do Cliente */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Informações do Cliente</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nome</label>
                      <p className="text-gray-900">{selectedOrcamento.nome}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">{selectedOrcamento.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Telefone</label>
                      <p className="text-gray-900">{selectedOrcamento.telefone}</p>
                    </div>
                  </div>
                </div>

                {/* Detalhes da Viagem */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Detalhes da Viagem</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Serviço</label>
                      <p className="text-gray-900">{selectedOrcamento.servico}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Data da Viagem</label>
                      <p className="text-gray-900">
                        {new Date(selectedOrcamento.dataViagem).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Origem</label>
                      <p className="text-gray-900">{selectedOrcamento.origem}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Destino</label>
                      <p className="text-gray-900">{selectedOrcamento.destino}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Número de Passageiros</label>
                      <p className="text-gray-900">{selectedOrcamento.numeroPassageiros}</p>
                    </div>
                  </div>
                </div>

                {/* Observações */}
                {selectedOrcamento.observacoes && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Observações</h3>
                    <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">
                      {selectedOrcamento.observacoes}
                    </p>
                  </div>
                )}

                {/* Ações */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Ações</h3>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => updateStatus(selectedOrcamento.id, 'respondido')}
                      disabled={selectedOrcamento.status === 'respondido' || selectedOrcamento.status === 'finalizado'}
                    >
                      Marcar como Respondido
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => updateStatus(selectedOrcamento.id, 'finalizado')}
                      disabled={selectedOrcamento.status === 'finalizado'}
                    >
                      Marcar como Finalizado
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(`mailto:${selectedOrcamento.email}`, '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}