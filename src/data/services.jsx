import React from 'react';
import { Activity, Brain, MessageCircle, Headset } from 'lucide-react';
import mapeamentoImg from '../assets/mapeamento.jpeg';
import mapeamentoCardImg from '../assets/mapeamento-capa-small.jpeg';
import neuroestimulacaoImg from '../assets/neuroestimulacao.jpg';
import neuroestimulacaoCardImg from '../assets/neuroestimulacao_capa.jpg';
import realidadeVirtualImg from '../assets/realidade_virtual.jpeg';
import realidadeVirtualCardImg from '../assets/realidade-virtual-capa.jpeg';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

export const SERVICES_DATA = [
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
        id: 'tcc',
        title: 'Terapia Cognitivo-Comportamental (TCC)',
        icon: <MessageCircle size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Abordagem baseada em evidências e focada na reestruturação de pensamentos e mudança de comportamentos.',
        fullDesc: 'A TCC é uma das abordagens mais eficazes da psicologia moderna. Focamos em identificar e modificar padrões de pensamento disfuncionais que influenciam suas emoções e comportamentos. É uma terapia ativa, estruturada e orientada para o presente e para a resolução de problemas.',
        benefits: ['Foco na solução de problemas', 'Desenvolvimento de autonomia', 'Técnicas práticas para o dia a dia', 'Prevenção de recaídas']
    },
    {
        id: 'realidade-virtual',
        title: 'Realidade Virtual',
        icon: <Headset size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Tecnologia imersiva para diagnósticos precisos e tratamentos eficazes.',
        fullDesc: 'A Realidade Virtual (RV) revoluciona o tratamento psicológico ao permitir a imersão em ambientes controlados. Ideal para reabilitação cognitiva e tratamento de fobias e ansiedade, a RV proporciona experiências seguras que aceleram a neuroplasticidade e potencializam os resultados terapêuticos.',
        image: realidadeVirtualImg,
        cardImage: realidadeVirtualCardImg,
        backgroundPosition: 'center 40%',
        benefits: ['Ambientes controlados e seguros', 'Reabilitação cognitiva imersiva', 'Maior engajamento do paciente', 'Protocolos personalizados']
    }
];
