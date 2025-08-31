import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, dataViagem, localEmbarque, destino, servico, mensagem } = body;

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Nome, email e telefone são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporter (usando Gmail como exemplo)
    // Para produção, use variáveis de ambiente
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'seu-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'sua-senha-de-app'
      }
    });

    // Template do email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Novo Orçamento - Moraes Fretamento</h1>
          <hr style="border: none; height: 2px; background: linear-gradient(90deg, #2563eb, #06b6d4); margin: 20px 0;">
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e40af; margin-top: 0;">📋 Dados do Cliente</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e40af; margin-top: 0;">🚌 Detalhes da Viagem</h2>
          <p><strong>Data da Viagem:</strong> ${dataViagem || 'Não informado'}</p>
          <p><strong>Local de Embarque:</strong> ${localEmbarque || 'Não informado'}</p>
          <p><strong>Destino:</strong> ${destino || 'Não informado'}</p>
          <p><strong>Tipo de Serviço:</strong> ${servico || 'Não informado'}</p>
        </div>
        
        ${mensagem ? `
        <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e40af; margin-top: 0;">💬 Mensagem</h2>
          <p style="white-space: pre-wrap;">${mensagem}</p>
        </div>
        ` : ''}
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #1e40af; color: white; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px;">📧 Responda este email ou entre em contato pelo telefone para enviar o orçamento</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Moraes Fretamento - Transporte com Qualidade e Segurança</p>
        </div>
      </div>
    `;

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'seu-email@gmail.com',
      to: process.env.EMAIL_TO || 'contato@moraes-fretamento.com',
      subject: `🚌 Novo Orçamento - ${nome} - ${servico || 'Serviço não especificado'}`,
      html: htmlContent,
      replyTo: email
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao enviar email' },
      { status: 500 }
    );
  }
}