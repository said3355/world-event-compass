
import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // يجب عليك إعداد هذه القيم في EmailJS dashboard
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'World Events Compass',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
      });

      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "حدث خطأ",
        description: "لم يتم إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">تواصل معنا</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="flex items-center mb-2">
            <User className="w-4 h-4 mr-2" />
            الاسم
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="أدخل اسمك"
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="email" className="flex items-center mb-2">
            <Mail className="w-4 h-4 mr-2" />
            البريد الإلكتروني
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="أدخل بريدك الإلكتروني"
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="flex items-center mb-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            الموضوع
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="موضوع الرسالة"
            required
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="message" className="flex items-center mb-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            الرسالة
          </Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="اكتب رسالتك هنا..."
            required
            rows={4}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>جاري الإرسال...</>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              إرسال الرسالة
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">إعداد EmailJS</h4>
        <p className="text-blue-800 text-sm">
          لاستخدام هذا النموذج، تحتاج إلى إعداد حساب EmailJS وتحديث المعرفات في الكود.
          <br />
          زيارة: <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
