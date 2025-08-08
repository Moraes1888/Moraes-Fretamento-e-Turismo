"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Bot, MessageCircle, Star, Shield, Users, Clock, 
  Brain, Cpu, Layers, Globe, Wifi, Eye, Headphones,
  Zap, Sparkles, Target, Award, TrendingUp, Calendar,
  MapPin, Phone, Mail, Instagram, Car, CheckCircle, Menu,
  Plus, Trash2, Lock
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = React.useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showAddImageModal, setShowAddImageModal] = React.useState(false);
  const [newImageData, setNewImageData] = React.useState({
    title: '',
    description: '',
    url: '',
    category: ''
  });
  const [galleryImages, setGalleryImages] = React.useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Frota Executiva",
      description: "Veículos de luxo para transporte corporativo"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Chapada Diamantina",
      description: "Aventura inesquecível na natureza"
    }
  ]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [vrMode, setVrMode] = React.useState(false);
  const [isAIOpen, setIsAIOpen] = React.useState(false);
  const [aiMessage, setAiMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [aiPersonality, setAiPersonality] = React.useState('friendly');
  const [hasTemporaryAccess, setHasTemporaryAccess] = React.useState(false);
  const [particlesEnabled, setParticlesEnabled] = React.useState(false);
  
  const destinations = [
    {
      name: "Frota Executiva",
      description: "Veículos de luxo para transporte corporativo",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      price: "Sob consulta",
      features: ["Ar condicionado", "Wi-Fi", "Poltronas reclináveis", "Sistema de som"]
    },
    {
      name: "Chapada Diamantina",
      description: "Aventura inesquecível na natureza",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "A partir de R$ 2.500",
      features: ["Guia especializado", "Seguro viagem", "Hospedagem", "Alimentação"]
    },
    {
      name: "Morro de São Paulo",
      description: "Paraíso tropical na Bahia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "A partir de R$ 1.800",
      features: ["Transfer incluído", "Passeios opcionais", "Hospedagem", "Café da manhã"]
    },
    {
      name: "Ônibus de Turismo",
      description: "Conforto e segurança para grupos",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      price: "Sob consulta",
      features: ["Capacidade para 44 passageiros", "Banheiro", "Frigobar", "TV/DVD"]
    },
    {
      name: "Eventos Corporativos",
      description: "Transporte especializado para empresas",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      price: "Sob consulta",
      features: ["Pontualidade garantida", "Motoristas uniformizados", "Veículos executivos", "Suporte 24h"]
    },
    {
      name: "Praia do Forte",
      description: "Belezas naturais e história",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "A partir de R$ 2.200",
      features: ["Projeto Tamar", "Vila histórica", "Praias paradisíacas", "Gastronomia local"]
    }
  ];

  // useEffect para acesso temporário
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasTemporaryAccess(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect para partículas fixas
  React.useEffect(() => {
    setParticlesEnabled(true);
  }, []);

  // useEffect para sistema de IA avançado
  React.useEffect(() => {
    if (isAIOpen && !aiMessage) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        const messages: Record<string, string> = {
          friendly: "Olá! 😊 Sou sua assistente de viagens inteligente. Como posso ajudar você hoje? Posso sugerir destinos, calcular orçamentos ou responder qualquer dúvida sobre nossos serviços!",
          analytical: "🤖 Sistema de análise ativado. Processando dados de preferências de viagem... Pronto para fornecer recomendações baseadas em algoritmos avançados e análise de padrões.",
          predictive: "🔮 Modo preditivo ativo. Analisando tendências de mercado e preferências... Posso prever os melhores destinos para você com base em dados históricos e machine learning."
        };
        setAiMessage(messages[aiPersonality]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAIOpen, aiPersonality]);

  // useEffect para carrossel automático de imagens
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Muda a imagem a cada 4 segundos

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const addNewImage = () => {
    if (newImageData.title && newImageData.url) {
      const newImage = {
        id: galleryImages.length + 1,
        url: newImageData.url,
        title: newImageData.title,
        description: newImageData.description
      };
      setGalleryImages([...galleryImages, newImage]);
      setNewImageData({ title: '', description: '', url: '', category: '' });
      setShowAddImageModal(false);
    }
  };

  const removeImage = (id: number) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você integraria com seu backend
    console.log('Dados do formulário:', formData);
    
    setIsSubmitting(false);
    setFormData({ nome: '', telefone: '', email: '', servico: '', mensagem: '' });
    alert('Mensagem enviada com sucesso!');
  };

  const handleAdminLogin = () => {
    const password = prompt('Digite a senha de administrador:');
    if (password === 'admin123') {
      setIsLoggedIn(true);
      alert('Login realizado com sucesso!');
    } else {
      alert('Senha incorreta!');
    }
  };

  const startVRTour = () => {
    setVrMode(!vrMode);
  };

  return (
    <>
      <div className={`min-h-screen transition-all duration-1000 ${
        vrMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
      }`}>
        
        {/* Partículas de fundo */}
        {particlesEnabled && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 ${
                  vrMode ? 'bg-cyan-400' : 'bg-blue-400'
                } rounded-full opacity-30 animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Header */}
        <header className={`relative z-10 transition-all duration-1000 ${
          vrMode 
            ? 'bg-black/50 backdrop-blur-xl border-b border-cyan-500/30' 
            : 'bg-white/80 backdrop-blur-sm border-b border-white/50'
        } sticky top-0`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Car className={`w-8 h-8 ${
                  vrMode ? 'text-cyan-400' : 'text-blue-600'
                }`} />
                <h1 className={`text-2xl font-bold ${
                  vrMode 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                }`}>
                  Moraes Fretamento
                </h1>
              </div>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#servicos" className={`font-medium transition-colors ${
                  vrMode 
                    ? 'text-cyan-200 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}>
                  Serviços
                </a>
                <a href="#galeria" className={`font-medium transition-colors ${
                  vrMode 
                    ? 'text-cyan-200 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}>
                  Galeria
                </a>
                <a href="#contato-section" className={`font-medium transition-colors ${
                  vrMode 
                    ? 'text-cyan-200 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}>
                  Contato
                </a>
                
                <Button
                  onClick={startVRTour}
                  className={`${
                    vrMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  } text-white transition-all duration-300 hover:scale-105`}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {vrMode ? 'Sair do VR' : 'Modo VR'}
                </Button>
                
                {hasTemporaryAccess && (
                  <Button
                    onClick={handleAdminLogin}
                    variant="outline"
                    className={`${
                      vrMode 
                        ? 'border-cyan-500/50 text-cyan-200 hover:bg-cyan-500/20' 
                        : 'border-blue-500/50 text-blue-600 hover:bg-blue-50'
                    } transition-all duration-300`}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
              </nav>
              
              <Button variant="ghost" className="md:hidden">
                <Menu className={`w-6 h-6 ${
                  vrMode ? 'text-cyan-400' : 'text-gray-600'
                }`} />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={`relative py-20 overflow-hidden transition-all duration-1000 ${
          vrMode 
            ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900' 
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              vrMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600'
            }`}>
              Viaje com Conforto e Segurança
            </h2>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 ${
              vrMode ? 'text-cyan-200' : 'text-gray-700'
            }`}>
              Fretamento executivo e turismo com a qualidade que você merece. 
              Conectando pessoas a experiências inesquecíveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className={`${
                  vrMode 
                    ? 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl`}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className={`${
                  vrMode 
                    ? 'border-cyan-500/50 text-cyan-200 hover:bg-cyan-500/20' 
                    : 'border-blue-500/50 text-blue-600 hover:bg-blue-50'
                } px-8 py-4 text-lg transition-all duration-300 hover:scale-105`}
              >
                <Phone className="w-5 h-5 mr-2" />
                (15) 97401-3939
              </Button>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Clientes Satisfeitos", value: "500+" },
                { icon: Car, label: "Veículos na Frota", value: "15+" },
                { icon: Award, label: "Anos de Experiência", value: "10+" }
              ].map((stat, index) => (
                <div key={index} className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  vrMode 
                    ? 'bg-black/30 backdrop-blur-xl border border-cyan-500/30' 
                    : 'bg-white/80 backdrop-blur-sm border border-white/50'
                } shadow-xl`}>
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${
                    vrMode ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <div className={`text-3xl font-bold mb-2 ${
                    vrMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    vrMode ? 'text-cyan-200' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section id="servicos" className={`py-20 transition-all duration-1000 ${
          vrMode 
            ? 'bg-gradient-to-br from-black via-gray-900 to-purple-900' 
            : 'bg-gradient-to-br from-white via-blue-50 to-cyan-50'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                vrMode 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>
                Nossos Serviços
              </h2>
              <p className={`text-xl ${
                vrMode ? 'text-cyan-200' : 'text-gray-700'
              }`}>
                Soluções completas em transporte e turismo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <Card key={index} className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  vrMode 
                    ? 'bg-black/30 backdrop-blur-xl border border-cyan-500/30' 
                    : 'bg-white/80 backdrop-blur-sm border border-white/50'
                } hover:shadow-2xl`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.price}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className={`mb-4 ${
                      vrMode ? 'text-cyan-200' : 'text-gray-600'
                    }`}>
                      {destination.description}
                    </p>
                    
                    <div className="space-y-2">
                      {destination.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 ${
                            vrMode ? 'text-cyan-400' : 'text-green-500'
                          }`} />
                          <span className={`text-sm ${
                            vrMode ? 'text-cyan-200' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Galeria */}
        <section id="galeria" className={`py-20 transition-all duration-1000 ${
          vrMode 
            ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900' 
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                vrMode 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>
                Galeria de Imagens
              </h2>
              <p className={`text-xl ${
                vrMode ? 'text-cyan-200' : 'text-gray-700'
              }`}>
                Conheça nossos veículos e destinos
              </p>
            </div>
            
            {/* Botão Adicionar Imagem (apenas para admin) */}
            {isLoggedIn && (
              <div className="text-center mb-8">
                <Button
                  onClick={() => setShowAddImageModal(true)}
                  className={`${
                    vrMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  } text-white transition-all duration-300 hover:scale-105`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Imagem
                </Button>
              </div>
            )}
            
            {/* Carrossel de Imagens */}
            <div className="relative max-w-4xl mx-auto">
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                vrMode 
                  ? 'bg-black/30 backdrop-blur-xl border border-cyan-500/30' 
                  : 'bg-white/80 backdrop-blur-sm border border-white/50'
              } hover:shadow-2xl`}>
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={image.id} className="w-full flex-shrink-0 relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-lg opacity-90">{image.description}</p>
                      </div>
                      
                      {/* Botão Remover (apenas para admin) */}
                      {isLoggedIn && (
                        <Button
                          onClick={() => removeImage(image.id)}
                          variant="destructive"
                          size="sm"
                          className="absolute top-4 right-4"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Botões de Navegação */}
                <button 
                  onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1)}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    vrMode 
                      ? 'bg-black/50 hover:bg-black/70 text-cyan-400' 
                      : 'bg-white/50 hover:bg-white/70 text-gray-800'
                  } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                >
                  ←
                </button>
                <button 
                  onClick={() => setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                    vrMode 
                      ? 'bg-black/50 hover:bg-black/70 text-cyan-400' 
                      : 'bg-white/50 hover:bg-white/70 text-gray-800'
                  } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                >
                  →
                </button>
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? (vrMode ? 'bg-cyan-400' : 'bg-blue-600') 
                          : (vrMode ? 'bg-white/30' : 'bg-white/50')
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal para Adicionar Imagem */}
        {showAddImageModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`max-w-md w-full rounded-2xl p-6 ${
              vrMode 
                ? 'bg-black/80 backdrop-blur-xl border border-cyan-500/30' 
                : 'bg-white/90 backdrop-blur-sm border border-white/50'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                vrMode ? 'text-white' : 'text-gray-800'
              }`}>
                Adicionar Nova Imagem
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                    Título da Imagem
                  </Label>
                  <Input
                    value={newImageData.title}
                    onChange={(e) => setNewImageData({...newImageData, title: e.target.value})}
                    className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                    placeholder="Digite o título"
                  />
                </div>
                
                <div>
                  <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                    Descrição
                  </Label>
                  <Input
                    value={newImageData.description}
                    onChange={(e) => setNewImageData({...newImageData, description: e.target.value})}
                    className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                    placeholder="Digite a descrição"
                  />
                </div>
                
                <div>
                  <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                    URL da Imagem
                  </Label>
                  <Input
                    value={newImageData.url}
                    onChange={(e) => setNewImageData({...newImageData, url: e.target.value})}
                    className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>
                
                <div>
                  <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                    Categoria
                  </Label>
                  <Select
                    value={newImageData.category}
                    onValueChange={(value) => setNewImageData({...newImageData, category: value})}
                  >
                    <SelectTrigger className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frota">Frota</SelectItem>
                      <SelectItem value="destinos">Destinos</SelectItem>
                      <SelectItem value="eventos">Eventos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button
                  onClick={() => setShowAddImageModal(false)}
                  variant="outline"
                  className={`flex-1 ${
                    vrMode 
                      ? 'border-cyan-500/50 text-cyan-200 hover:bg-cyan-500/20' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={addNewImage}
                  className={`flex-1 ${
                    vrMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  } text-white`}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Seção Contato */}
        <section id="contato-section" className={`py-20 transition-all duration-1000 ${
          vrMode 
            ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900' 
            : 'bg-gradient-to-br from-purple-50 via-white to-cyan-50'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                vrMode 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
              }`}>
                Entre em Contato
              </h2>
              <p className={`text-xl ${
                vrMode ? 'text-cyan-200' : 'text-gray-700'
              }`}>
                Estamos prontos para atender você 24/7
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Telefone",
                    info: "(15) 97401-3939",
                    action: "tel:+5515974013939"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "contato@moraesfretamento.com.br",
                    action: "mailto:contato@moraesfretamento.com.br"
                  },
                  {
                    icon: MapPin,
                    title: "Endereço",
                    info: "Sorocaba - SP, Brasil",
                    action: "#"
                  },
                  {
                    icon: Instagram,
                    title: "Instagram",
                    info: "@moraesfretamento",
                    action: "https://instagram.com/moraesfretamento"
                  }
                ].map((contact, index) => (
                  <Card key={index} className={`p-6 transition-all duration-500 hover:scale-105 ${
                    vrMode 
                      ? 'bg-black/30 backdrop-blur-xl border border-cyan-500/30' 
                      : 'bg-white/80 backdrop-blur-sm border border-white/50'
                  } hover:shadow-2xl`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-bold ${
                          vrMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {contact.title}
                        </h3>
                        <a 
                          href={contact.action}
                          className={`${
                            vrMode ? 'text-cyan-200 hover:text-white' : 'text-gray-600 hover:text-blue-600'
                          } transition-colors duration-300`}
                        >
                          {contact.info}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Formulário de Contato */}
              <Card className={`p-8 transition-all duration-500 ${
                vrMode 
                  ? 'bg-black/30 backdrop-blur-xl border border-cyan-500/30' 
                  : 'bg-white/80 backdrop-blur-sm border border-white/50'
              } hover:shadow-2xl`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                        Nome *
                      </Label>
                      <Input
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                        Telefone *
                      </Label>
                      <Input
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                        placeholder="(15) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                      Email *
                    </Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                      Tipo de Serviço
                    </Label>
                    <Select
                      value={formData.servico}
                      onValueChange={(value) => setFormData({...formData, servico: value})}
                    >
                      <SelectTrigger className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executivo">Fretamento Executivo</SelectItem>
                        <SelectItem value="turismo">Turismo</SelectItem>
                        <SelectItem value="eventos">Eventos</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className={vrMode ? 'text-cyan-200' : 'text-gray-700'}>
                      Mensagem
                    </Label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      className={vrMode ? 'bg-black/50 border-cyan-500/30 text-white' : ''}
                      placeholder="Descreva suas necessidades..."
                      rows={4}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Assistente IA Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsAIOpen(!isAIOpen)}
          className="group relative bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-600 p-4 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 border-2 border-purple-300/50 backdrop-blur-xl overflow-hidden"
        >
          <Bot className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
        </button>

        {isAIOpen && (
          <div className="absolute bottom-16 right-0 w-96 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-cyan-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-cyan-300/30 p-6">
            <div className="flex items-center gap-4 mb-6">
              <Bot className="w-8 h-8 text-cyan-400" />
              <div className="flex-1">
                <h3 className="text-cyan-200 font-bold text-lg">IA Avançada</h3>
                <p className="text-cyan-100/70 text-sm">Assistente Inteligente</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              {isTyping ? (
                <div className="flex items-center gap-3 text-cyan-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm font-medium">IA processando...</span>
                </div>
              ) : aiMessage ? (
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-4 border border-cyan-300/30">
                  <p className="text-cyan-100 text-sm leading-relaxed font-medium">{aiMessage}</p>
                </div>
              ) : (
                <div className="text-center text-cyan-200/70 text-sm bg-cyan-500/10 rounded-xl p-4">
                  <Bot className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <p className="font-medium">IA Avançada Ativada</p>
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-cyan-300/20">
              <h4 className="text-xs font-bold text-cyan-200 mb-3">Modos de IA</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setAiPersonality('friendly')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    aiPersonality === 'friendly' 
                      ? 'bg-cyan-500/30 text-cyan-200' 
                      : 'bg-cyan-500/10 text-cyan-300'
                  }`}
                >
                  😊 Amigável
                </button>
                <button 
                  onClick={() => setAiPersonality('analytical')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    aiPersonality === 'analytical' 
                      ? 'bg-purple-500/30 text-purple-200' 
                      : 'bg-purple-500/10 text-purple-300'
                  }`}
                >
                  🤖 Analítica
                </button>
                <button 
                  onClick={() => setAiPersonality('predictive')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    aiPersonality === 'predictive' 
                      ? 'bg-pink-500/30 text-pink-200' 
                      : 'bg-pink-500/10 text-pink-300'
                  }`}
                >
                  🔮 Preditiva
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Flutuante */}
      <Button
        asChild
        className="fixed bottom-6 left-6 z-50 group relative overflow-hidden p-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
      >
        <a href="https://wa.me/5515974013939" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </a>
      </Button>
    </>
  );
 }
