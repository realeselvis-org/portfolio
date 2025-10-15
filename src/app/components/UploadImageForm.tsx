"use client";

import { useState } from 'react'; // React components use hooks like useState for interactivity [2]
import { uploadProjectImage } from '@/app/actions/uploadActions';


export function UploadImageForm() {
    // Usamos el hook useState de React [2]
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');
        setMessage('Subiendo imagen...');

        const formData = new FormData(event.currentTarget);

        try {
            // Llamada a la Server Action
            const result = await uploadProjectImage(formData);

            if (result.success && result.imageUrl) {
                setStatus('success');
                setMessage(`¡Subida exitosa! URL: ${result.imageUrl}`);
                // Aquí podrías redirigir o actualizar el estado padre
            } else {
                setStatus('error');
                setMessage(`Error: ${result.error || "Fallo en la subida."}`);
            }
        } catch (e) {
            setStatus('error');
            setMessage('Fallo inesperado durante el envío.');
        }
    };

    // Siguiendo los principios de Atomic Design, el formulario es un Organismo o Molécula, 
    // y los botones/inputs son Átomos [6-8].

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded-md">
            <h2 className="text-xl font-bold mb-4">Subir Imagen del Proyecto</h2>
            
            <div className="mb-4">
                <label htmlFor="imageFile" className="block text-sm font-medium">
                    Seleccionar Archivo
                </label>
                {/* El input de archivo es un Atom que permite la interacción [6, 9] */}
                <input
                    id="imageFile"
                    name="imageFile"
                    type="file"
                    required
                    accept="image/*"
                    className="mt-1 block w-full text-sm"
                    disabled={status === 'loading'}
                />
            </div>

            {/* El botón de envío también es un Atom [6] */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-2 px-4 rounded ${status === 'loading' ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {status === 'loading' ? 'Cargando...' : 'Subir Imagen'}
            </button>

            {message && (
                <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </p>
            )}
        </form>
    );
}