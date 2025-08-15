import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-poppins font-bold text-2xl text-gray-900">
              <span className="text-bright-orange">Marketing</span>Expert
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="font-inter text-gray-600 hover:text-bright-orange transition-colors">Услуги</a>
              <a href="#about" className="font-inter text-gray-600 hover:text-bright-orange transition-colors">О нас</a>
              <a href="#contact" className="font-inter text-gray-600 hover:text-bright-orange transition-colors">Контакты</a>
            </nav>
            <Button className="bg-bright-orange hover:bg-orange-600 text-white font-inter">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-cool-turquoise/20 text-cool-turquoise border-cool-turquoise/30 animate-fade-in">
              Эксперт по цифровому маркетингу
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-7xl text-gray-900 mb-8 leading-tight animate-fade-in">
              Продвижение в 
              <span className="text-bright-orange animate-float"> соцсетях</span> и 
              <span className="text-cool-turquoise animate-float"> контент</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Помогаю брендам расти в цифровом пространстве через эффективные стратегии продвижения в социальных сетях и качественный контент-маркетинг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-bright-orange hover:bg-orange-600 text-white font-inter px-8 py-4 hover:scale-105 transition-all duration-200">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="border-cool-turquoise text-cool-turquoise hover:bg-cool-turquoise hover:text-white font-inter px-8 py-4 hover:scale-105 transition-all duration-200">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              Мои услуги
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к продвижению вашего бренда в цифровом пространстве
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SMM Service */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-bright-orange/5 to-bright-orange/10 group hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-bright-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="font-poppins text-2xl text-gray-900 mb-3">
                  Продвижение в соцсетях
                </CardTitle>
                <CardDescription className="font-inter text-gray-600 text-lg">
                  Полный цикл SMM-продвижения для роста вашей аудитории
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-bright-orange mr-3" />
                    Стратегия и планирование контента
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-bright-orange mr-3" />
                    Создание и публикация постов
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-bright-orange mr-3" />
                    Настройка и ведение рекламы
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-bright-orange mr-3" />
                    Анализ результатов и оптимизация
                  </li>
                </ul>
                <div className="flex justify-center">
                  <img 
                    src="/img/63de68c3-e398-46bb-ba20-c35bd7425e40.jpg" 
                    alt="SMM продвижение" 
                    className="w-full max-w-xs rounded-xl opacity-80"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content Marketing Service */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cool-turquoise/5 to-cool-turquoise/10 group hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-cool-turquoise rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <CardTitle className="font-poppins text-2xl text-gray-900 mb-3">
                  Контент-маркетинг
                </CardTitle>
                <CardDescription className="font-inter text-gray-600 text-lg">
                  Создание ценного контента, который привлекает и удерживает клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-cool-turquoise mr-3" />
                    Разработка контент-стратегии
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-cool-turquoise mr-3" />
                    Создание статей и лонгридов
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-cool-turquoise mr-3" />
                    Видео и визуальный контент
                  </li>
                  <li className="flex items-center font-inter text-gray-700">
                    <Icon name="Check" size={16} className="text-cool-turquoise mr-3" />
                    SEO-оптимизация материалов
                  </li>
                </ul>
                <div className="flex justify-center">
                  <img 
                    src="/img/4f1c32c9-9e53-4ae0-843e-fa393d209a68.jpg" 
                    alt="Контент маркетинг" 
                    className="w-full max-w-xs rounded-xl opacity-80"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-bright-orange to-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-16">
            Результаты работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="TrendingUp" size={48} className="text-white mx-auto mb-4" />
              <div className="font-poppins font-bold text-4xl text-white mb-2">150%</div>
              <div className="font-inter text-white/90">Рост охватов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="Users" size={48} className="text-white mx-auto mb-4" />
              <div className="font-poppins font-bold text-4xl text-white mb-2">500K+</div>
              <div className="font-inter text-white/90">Новых подписчиков</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="Target" size={48} className="text-white mx-auto mb-4" />
              <div className="font-poppins font-bold text-4xl text-white mb-2">300%</div>
              <div className="font-inter text-white/90">ROI кампаний</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-6">
            Готовы начать?
          </h2>
          <p className="font-inter text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Обсудим вашу задачу и создадим стратегию продвижения, которая принесет реальные результаты
          </p>
          <Button size="lg" className="bg-bright-orange hover:bg-orange-600 text-white font-inter px-12 py-4">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto text-center">
          <div className="font-poppins font-bold text-2xl text-gray-900 mb-4">
            <span className="text-bright-orange">Marketing</span>Expert
          </div>
          <p className="font-inter text-gray-600 mb-6">
            Ваш партнер в цифровом маркетинге
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-bright-orange cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-bright-orange cursor-pointer transition-colors" />
            <Icon name="Linkedin" size={24} className="text-gray-400 hover:text-bright-orange cursor-pointer transition-colors" />
            <Icon name="Mail" size={24} className="text-gray-400 hover:text-bright-orange cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;