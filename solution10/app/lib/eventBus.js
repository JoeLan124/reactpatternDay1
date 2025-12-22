const listeners = new Map();

export const eventBus = {

// subscribe to an event, sowie Info wer ich bin: hanlder!

    subscribe(eventName, handler) {
        if (!listeners.has(eventName)) {
            listeners.set(eventName, new Set());//wer ich bin: new Set() ist der handler, wer ich bin!
        }

        listeners.get(eventName).add(handler);

        // Return an UNsubscribe function
        return () => { listeners.get(eventName)?.delete(handler) }
        
    },


// clean and unsubscribe, this returns a method / function to unsubscribe

    publish(eventName, payload) {
        listeners.get(eventName)?.forEach((handler) => {
            handler(payload)
        })
    
        
return  () => {
	listeners.get(eventName)?.delete(handler)
}

}}