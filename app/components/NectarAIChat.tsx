"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactElement } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  id: string;
}

// Utility function for creating IDs
function createId(prefix: string) {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// Contact Form Component
const ContactForm = ({ fields, onSuccess }: { fields: string[]; onSuccess?: (content: string, role?: "user" | "assistant") => void }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // This would normally call an API to submit the form
    console.log("Contact form submitted:", formData);

    // Show success message in chat and hide form
    setTimeout(() => {
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess("Perfect! Your contact request has been submitted successfully. Our team will reach out to you within 24 hours. Thank you for considering Shudveta for your project! 🚀");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-semibold text-green-900">Form Submitted Successfully</h4>
        </div>
        <p className="text-sm text-green-700">
          Your contact information has been received. Our team will review your request and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-blue-200 rounded-lg p-4">
      <h4 className="font-semibold text-blue-900 mb-3">📋 Contact Form</h4>
      <form onSubmit={handleFormSubmit} className="space-y-3">
        {fields.map((field: string) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field} {field !== 'Message' && '*'}
            </label>
            {field === 'Message' ? (
              <textarea
                value={formData[field] || ''}
                onChange={(e) => handleFormChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={3}
                placeholder={`Enter your ${field.toLowerCase()}...`}
                required={field !== 'Message'}
              />
            ) : (
              <input
                type={field === 'Email' ? 'email' : 'text'}
                value={formData[field] || ''}
                onChange={(e) => handleFormChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter your ${field.toLowerCase()}...`}
                required={field !== 'Message'}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

interface NectarAIChatProps {
  isOpen: boolean;
  messages: ChatMessage[];
  loading: boolean;
  error?: string | null;
  onClose: () => void;
  onSendMessage: (content: string) => Promise<void>;
  onAddMessage?: (content: string, role?: "user" | "assistant") => void;
}

export function NectarAIChat({
  isOpen,
  messages,
  loading,
  error,
  onClose,
  onSendMessage,
  onAddMessage
}: NectarAIChatProps) {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Function to add messages to chat (used by ContactForm)
  const addMessageToChat = (content: string, role: "user" | "assistant" = "assistant") => {
    if (onAddMessage) {
      onAddMessage(content, role);
    }
  };

  // Function to format message content with support for markdown-like syntax
  const formatMessageContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines
      if (!line) {
        if (i > 0 && i < lines.length - 1) {
          elements.push(<div key={`spacer-${key++}`} className="h-2" />);
        }
        continue;
      }

      // Check for numbered list items (1. 2. 3. etc.)
      const numberedListMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (numberedListMatch) {
        elements.push(
          <div key={`numbered-${key++}`} className="flex items-start gap-2 mb-2">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
              {numberedListMatch[1]}
            </span>
            <div className="flex-1">
              {formatInlineContent(numberedListMatch[2])}
            </div>
          </div>
        );
        continue;
      }

      // Check for bold text (**text**)
      if (line.includes('**')) {
        elements.push(
          <p key={`bold-${key++}`} className="mb-3 leading-relaxed">
            {formatInlineContent(line)}
          </p>
        );
        continue;
      }

      // Regular paragraph
      elements.push(
        <p key={`para-${key++}`} className="mb-3 leading-relaxed last:mb-0">
          {line}
        </p>
      );
    }

    return <div>{elements}</div>;
  };

  // Function to format inline content (bold text, etc.)
  const formatInlineContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-blue-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Function to render message content, handling JSON responses
  const renderMessageContent = (content: string) => {
    // Check if content contains JSON (look for opening brace)
    const jsonStartIndex = content.indexOf('{');
    if (jsonStartIndex !== -1) {
      const textBefore = content.substring(0, jsonStartIndex).trim();
      const potentialJson = content.substring(jsonStartIndex);

      try {
        // Try to parse JSON
        const jsonData = JSON.parse(potentialJson);

        // Handle different action types
        if (jsonData.action === 'request_contact' || jsonData.action === 'submit_contact_request' || jsonData.action === 'request_contact_form') {
          return (
            <div>
              {textBefore && (
                <div className="mb-3">
                  {formatMessageContent(textBefore)}
                </div>
              )}
              {jsonData.details.next_step && (
                <p className="mb-3 text-sm text-gray-600 italic">
                  {jsonData.details.next_step}
                </p>
              )}
              <ContactForm
                fields={jsonData.details.required_fields || jsonData.details.fields_required || jsonData.details.fields_needed}
                onSuccess={addMessageToChat}
              />
            </div>
          );
        }

        // For other JSON responses, show formatted JSON
        return (
          <div>
            {textBefore && (
              <div className="mb-2">
                {formatMessageContent(textBefore)}
              </div>
            )}
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto border">
              {JSON.stringify(jsonData, null, 2)}
            </pre>
          </div>
        );
      } catch (error) {
        // If JSON parsing fails, render as regular text
        return content.split("\n").map((line, index) => (
          <p key={`line-${index}`} className="mb-2 last:mb-0">
            {line}
          </p>
        ));
      }
    }

    // Enhanced text formatting for regular content
    return formatMessageContent(content);
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (!value || loading) {
      return;
    }

    setInputValue("");
    await onSendMessage(value);
  };

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-end pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full flex items-end justify-end p-4 sm:p-6 pointer-events-none">
            <motion.div
              className="pointer-events-auto w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <header className="relative px-6 py-5 border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg"></div>
                    <div className="relative w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                      NA
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">NectarAI by Shudveta</h2>
                    <p className="text-sm text-gray-600">
                      Your Shudveta concierge powered by NectarAI
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Close NectarAI chatbot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>

              <section className="h-96 overflow-y-auto px-6 py-5 space-y-4 bg-white">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm border ${
                        message.role === "assistant"
                          ? "bg-blue-50 border-blue-100 text-gray-800"
                          : "bg-blue-600 border-blue-500 text-white"
                      }`}
                    >
                      {renderMessageContent(message.content)}
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-2xl border border-blue-100">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
                      <span className="text-xs font-medium ml-2">NectarAI is thinking…</span>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex justify-start">
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-2xl border border-red-200 text-sm shadow-sm">
                      {error}
                    </div>
                  </div>
                )}

                <div ref={endRef} />
              </section>

              <form onSubmit={handleSubmit} className="border-t border-blue-100 bg-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                          event.preventDefault();
                          handleSubmit(event as any);
                        }
                      }}
                      placeholder="Ask how Shudveta can elevate your next project…"
                      className="w-full h-[46px] rounded-2xl border border-blue-200 bg-blue-50/60 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-inner leading-normal"
                      rows={1}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    disabled={loading || !inputValue.trim()}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed h-[46px]"
                  >
                    <span>Send</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
