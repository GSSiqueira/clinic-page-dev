import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import Button from './Button';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-orange-50/50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Histórias de Transformação</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-md">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < t.rating ? "#FFD700" : "none"} stroke={i < t.rating ? "#FFD700" : "#CBD5E1"} />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                            <p className="font-bold text-gray-900">{t.name}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="https://www.vittude.com/psicologo/hanne-magalhaes-failla" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">
                            Ver mais avaliações
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
