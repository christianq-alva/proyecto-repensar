// src/js/components/MessageModal.js
export default class MessageModal {
    constructor() {
        this.createModal();
        this.setupEventListeners();
        this.messageTemplates = {
            bienvenida: [
                "¡Hola [nombre]! Bienvenido/a a nuestro curso de [curso]. Estamos emocionados de tenerte con nosotros.",
                "¡Saludos [nombre]! Gracias por tu interés en el curso de [curso]. ¿Tienes alguna pregunta inicial?"
            ],
            seguimiento: [
                "Hola [nombre], ¿cómo vas con el curso de [curso]? ¿Necesitas ayuda con algo?",
                "¡Hola [nombre]! Solo quería saber cómo te está yendo en el curso de [curso]. Estamos aquí para apoyarte."
            ],
            'cierre-ok': [
                "¡Felicitaciones [nombre] por completar el curso de [curso]! Ha sido un placer tenerte como estudiante.",
                "¡Excelente trabajo [nombre]! Has finalizado exitosamente el curso de [curso]. ¡Sigue así!"
            ],
            'cierre-fail': [
                "Hola [nombre], lamentamos que no hayas podido continuar con el curso de [curso]. ¡Esperamos verte pronto!",
                "[nombre], sentimos que no hayas podido seguir con el curso de [curso]. ¡Las puertas siempre estarán abiertas!"
            ]
        };
    }

    createModal() {
        const modalHTML = `
            <div id="messageModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden flex items-center justify-center">
                <div class="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
                    <h2 class="text-2xl font-bold mb-4">Editar Mensaje</h2>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                        <textarea id="messageText" class="w-full h-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="mb-4">
                        <h3 class="text-lg font-semibold mb-2">Sugerencias:</h3>
                        <div id="messageSuggestions" class="space-y-2"></div>
                    </div>
                    <div class="flex justify-end space-x-4">
                        <button id="cancelMessage" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancelar</button>
                        <button id="sendMessage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enviar</button>
                    </div>
                </div>
            </div>`;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    setupEventListeners() {
        const modal = document.getElementById('messageModal');
        const cancelBtn = document.getElementById('cancelMessage');
        const sendBtn = document.getElementById('sendMessage');

        cancelBtn.addEventListener('click', () => this.hideModal());
        sendBtn.addEventListener('click', () => this.handleSend());
    }

    showModal(action, lead) {
        const modal = document.getElementById('messageModal');
        const messageText = document.getElementById('messageText');
        const suggestionsContainer = document.getElementById('messageSuggestions');

        this.currentAction = action;
        this.currentLead = lead;

        // Set default message
        let defaultMessage = `${lead.nombre} ${lead.apellido} - ${this.getActionTitle(action)}`;
        messageText.value = this.replacePlaceholders(defaultMessage, lead);

        // Show suggestions
        suggestionsContainer.innerHTML = '';
        if (this.messageTemplates[action]) {
            this.messageTemplates[action].forEach((template, index) => {
                const suggestionBtn = document.createElement('button');
                suggestionBtn.className = 'w-full text-left p-2 hover:bg-gray-100 rounded';
                suggestionBtn.textContent = this.replacePlaceholders(template, lead);
                suggestionBtn.addEventListener('click', () => {
                    messageText.value = suggestionBtn.textContent;
                });
                suggestionsContainer.appendChild(suggestionBtn);
            });
        }

        modal.classList.remove('hidden');
    }

    hideModal() {
        const modal = document.getElementById('messageModal');
        modal.classList.add('hidden');
    }

    handleSend() {
        const messageText = document.getElementById('messageText').value;
        this.currentLead.sendWhatsAppMessage(messageText);
        
        // Update status based on action
        switch (this.currentAction) {
            case 'bienvenida':
                this.currentLead.updateStatus('iniciado');
                break;
            case 'seguimiento':
                this.currentLead.updateStatus('en proceso');
                break;
            case 'cierre-ok':
                this.currentLead.updateStatus('exitoso');
                break;
            case 'cierre-fail':
                this.currentLead.updateStatus('no desea');
                break;
        }

        this.hideModal();
    }

    getActionTitle(action) {
        const titles = {
            'bienvenida': 'Bienvenida',
            'seguimiento': 'Seguimiento',
            'cierre-ok': 'Cierre OK',
            'cierre-fail': 'Cierre Fail'
        };
        return titles[action] || action;
    }

    replacePlaceholders(text, lead) {
        return text
            .replace('[nombre]', lead.nombre)
            .replace('[curso]', lead.curso || 'nuestros cursos');
    }
}