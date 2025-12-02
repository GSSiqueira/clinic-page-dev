import React from 'react';
import { Activity, Brain, MessageCircle } from 'lucide-react';
import mapeamentoImg from '../assets/mapeamento.jpeg';

const PRIMARY_COLOR = 'rgb(248, 179, 25)';

export const SERVICES_DATA = [
    {
        id: 'neuroestimulacao',
        title: 'Neuroestimulação',
        icon: <Activity size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Técnicas avançadas e não invasivas para modulação da atividade cerebral.',
        fullDesc: 'A neuroestimulação utiliza tecnologias modernas como a Estimulação Magnética Transcraniana (EMT) e a Estimulação por Corrente Contínua (tDCS) para tratar condições como depressão, ansiedade e dores crônicas. É um procedimento seguro, não invasivo e com alta eficácia clínica.',
        benefits: ['Tratamento sem medicação excessiva', 'Sessões rápidas e indolores', 'Resultados comprovados cientificamente', 'Melhora da plasticidade cerebral']
    },
    {
        id: 'mapeamento',
        title: 'Mapeamento Cerebral',
        icon: <Brain size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Análise detalhada do funcionamento elétrico do seu cérebro (QEEG).',
        fullDesc: 'O Mapeamento Cerebral, ou Eletroencefalograma Quantitativo (QEEG), permite visualizar as ondas cerebrais em tempo real. Com isso, identificamos padrões de desregulação que podem estar associados a TDAH, insônia, ansiedade e outros transtornos, permitindo um tratamento personalizado.',
        image: mapeamentoImg,
        benefits: ['Diagnóstico mais preciso', 'Visualização gráfica do funcionamento cerebral', 'Personalização do tratamento', 'Monitoramento da evolução clínica']
    },
    {
        id: 'tcc',
        title: 'Terapia Cognitivo Comportamental',
        icon: <MessageCircle size={48} style={{ color: PRIMARY_COLOR }} />,
        shortDesc: 'Abordagem focada na reestruturação de pensamentos e mudança de comportamentos.',
        fullDesc: 'A TCC é uma das abordagens mais eficazes da psicologia moderna. Focamos em identificar e modificar padrões de pensamento disfuncionais que influenciam suas emoções e comportamentos. É uma terapia ativa, estruturada e orientada para o presente e para a resolução de problemas.',
        benefits: ['Foco na solução de problemas', 'Desenvolvimento de autonomia', 'Técnicas práticas para o dia a dia', 'Prevenção de recaídas']
    }
];
