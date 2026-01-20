import React from 'react';
import { Activity, Brain, MessageCircle, Headset, Zap, Smartphone } from 'lucide-react';
import mapeamentoImg from '../assets/mapeamento.jpeg';
import mapeamentoCardImg from '../assets/mapeamento-capa-small.jpeg';
import neuroestimulacaoImg from '../assets/neuroestimulacao.jpg';
import neuroestimulacaoCardImg from '../assets/neuroestimulacao_capa.jpg';
import realidadeVirtualImg from '../assets/realidade_virtual.jpeg';
import realidadeVirtualCardImg from '../assets/realidade-virtual-capa.jpeg';
import neurofeedbackImg from '../assets/neurofeedback.jpg';
import neurofeedbackCardImg from '../assets/neurofeedback_capa.jpg';
import nervoVagoImg from '../assets/nervo_vago2.jpg';
import nervoVagoCardImg from '../assets/nervo_vago_capa.jpg';
import tccImg from '../assets/tcc.jpeg';
import tccCardImg from '../assets/tcc-capa.jpeg';
import biofeedbackAppImg from '../assets/biofeedback.jpeg';
import biofeedbackAppCardImg from '../assets/biofeedback-capa.jpeg';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

export const SERVICES_DATA = [

    {
        id: 'mapeamento',
        title: 'Avaliação Psicológica com Mapeamento Cerebral Avançado',
        icon: <Brain size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Uma Análise detalhada do funcionamento elétrico do seu cérebro (QEEG).',
        fullDesc: 'O Mapeamento Cerebral, ou Eletroencefalograma Quantitativo (QEEG), permite visualizar as ondas cerebrais em tempo real. Com isso, identificamos padrões de desregulação que podem estar associados a TDAH, insônia, ansiedade e outros transtornos, permitindo um tratamento personalizado.',
        image: mapeamentoImg,
        cardImage: mapeamentoCardImg,
        benefits: ['Diagnóstico mais preciso', 'Visualização gráfica do funcionamento cerebral', 'Personalização do tratamento', 'Monitoramento da evolução clínica']
    },
    {
        id: 'neuroestimulacao',
        title: 'Neuroestimulação',
        icon: <Activity size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Técnicas avançadas e não invasivas para modulação da atividade cerebral.',
        fullDesc: 'A neuroestimulação utiliza tecnologias modernas como a Estimulação Magnética Transcraniana (EMT) e a Estimulação por Corrente Contínua (tDCS) para tratar condições como depressão, ansiedade e dores crônicas. É um procedimento seguro, não invasivo e com alta eficácia clínica.',
        image: neuroestimulacaoImg,
        cardImage: neuroestimulacaoCardImg,
        benefits: ['Tratamento sem medicação excessiva', 'Sessões rápidas e indolores', 'Resultados comprovados cientificamente', 'Melhora da plasticidade cerebral']
    },
    {
        id: 'realidade-virtual',
        title: 'Realidade Virtual',
        icon: <Headset size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Tecnologia imersiva para diagnósticos precisos e tratamentos eficazes.',
        fullDesc: 'A Realidade Virtual (RV) revoluciona o tratamento psicológico ao permitir a imersão em ambientes controlados. Ideal para reabilitação cognitiva e tratamento de fobias e ansiedade, a RV proporciona experiências seguras que aceleram a neuroplasticidade e potencializam os resultados terapêuticos.',
        image: realidadeVirtualImg,
        cardImage: realidadeVirtualCardImg,
        backgroundPosition: 'center top',
        benefits: ['Ambientes controlados e seguros', 'Reabilitação cognitiva imersiva', 'Maior engajamento do paciente', 'Protocolos personalizados']
    },
    {
        id: 'neurofeedback',
        title: 'Neurofeedback (Treinamento Cerebral)',
        icon: <Zap size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Treinamento cerebral avançado para autorregulação e otimização cognitiva.',
        fullDesc: 'O Neurofeedback é uma abordagem terapêutica que utiliza tecnologia para monitorar a atividade cerebral em tempo real. Através de estímulos visuais ou auditivos, o cérebro "aprende" a regular suas próprias ondas, promovendo melhorias significativas em quadros de TDAH, ansiedade, insônia e performance cognitiva, sem o uso de medicação.',
        image: neurofeedbackImg,
        cardImage: neurofeedbackCardImg,
        benefits: ['Regulação da ansiedade e estresse', 'Aumento do foco e concentração', 'Melhora na qualidade do sono', 'Tratamento não medicamentoso']
    },
    {
        id: 'estimulacao-nervo-vago',
        title: 'Estimulação do Nervo Vago',
        icon: <Activity size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Terapia neuromodulatória para redução de ansiedade e inflamação sistêmica.',
        fullDesc: 'A Estimulação do Nervo Vago (VNS) é uma técnica não invasiva que ativa o sistema parassimpático através de dispositivos auriculares específicos. Este "nervo calmante" do corpo ajuda a regular o estresse, reduzir a ansiedade, melhorar o humor e combater processos inflamatórios, promovendo um equilíbrio profundo entre mente e corpo.',
        image: nervoVagoImg,
        cardImage: nervoVagoCardImg,
        benefits: ['Redução significativa da ansiedade', 'Ação anti-inflamatória sistêmica', 'Melhora da qualidade do sono', 'Equilíbrio do sistema nervos autônomo']
    },
    {
        id: 'tcc',
        title: 'Terapia Cognitivo-Comportamental (TCC)',
        icon: <MessageCircle size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Abordagem baseada em evidências e focada na reestruturação de pensamentos e mudança de comportamentos.',
        fullDesc: 'A TCC é uma das abordagens mais eficazes da psicologia moderna. Focamos em identificar e modificar padrões de pensamento disfuncionais que influenciam suas emoções e comportamentos. É uma terapia ativa, estruturada e orientada para o presente e para a resolução de problemas.',
        image: tccImg,
        cardImage: tccCardImg,
        benefits: ['Foco na solução de problemas', 'Desenvolvimento de autonomia', 'Técnicas práticas para o dia a dia', 'Prevenção de recaídas']
    },
    {
        id: 'biofeedback-app',
        title: 'Biofeedback',
        icon: <Smartphone size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Monitoramento de níveis de estresse com auxílio de aplicativo complementar para uso domiciliar.',
        fullDesc: 'O serviço de Biofeedback utiliza sensores e um aplicativo complementar que permite ao paciente monitorar seus níveis de estresse e variabilidade cardíaca no conforto de casa. Essa tecnologia facilita a autoconsciência e o aprendizado de técnicas de relaxamento, integrando dados clínicos com a rotina diária para um tratamento mais efetivo.',
        image: biofeedbackAppImg,
        cardImage: biofeedbackAppCardImg,
        benefits: ['Monitoramento domiciliar contínuo', 'Aplicativo intuitivo para acompanhamento', 'Controle do estresse e ansiedade', 'Visualização de progresso em tempo real']
    }
];
