import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink, Trophy } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Multimodal Emotion Detection Using Deep Learning",
      subtitle: "Master's Thesis",
      description:
        "Developed an end-to-end multimodal emotion recognition system integrating text, image, and speech processing. Fine-tuned BERT, GPT-2, and RoBERTa for text classification achieving 93%+ accuracy. Implemented CNN, MobileNetV3, ResNet-50, and EfficientNet for facial expression recognition. Built speech emotion recognition using MFCC and CNN-LSTM reaching 98% accuracy. Designed attention-based fusion mechanism achieving 97% overall accuracy.",
      tech: ["Python", "BERT", "GPT-2", "CNN-LSTM", "TensorFlow", "Streamlit", "Deep Learning"],
      impact: "97% overall accuracy",
      image: "/ai-emotion-detection-multimodal-deep-learning-neur.jpg",
    },
    {
      title: "House Price Prediction Using Machine Learning",
      description:
        "Analyzed 187k+ property listings to identify key price drivers (bathrooms, floor %, location) using statistical analysis and visualization. Improved model interpretability and accuracy by 40% through feature engineering and data standardization, enabling reliable property valuation (R² = 0.88).",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Feature Engineering"],
      impact: "R² = 0.88, 40% accuracy improvement",
      image: "/data-visualization-house-prices-chart-machine-lear.jpg",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Created collaborative filtering system analyzing user preferences and viewing history to suggest relevant content, increasing user engagement metrics by 20%.",
      tech: ["Python", "Collaborative Filtering", "Data Analysis", "Pandas"],
      impact: "20% engagement increase",
      image: "/movie-streaming-interface-recommendation-system.jpg",
    },
    {
      title: "Automated P&L Report Dashboard",
      description:
        "Designed interactive Excel dashboards using Power Query and advanced formulas to automate financial reporting, saving over 4 hours of manual work weekly.",
      tech: ["Excel", "Power Query", "Data Visualization", "Automation"],
      impact: "4+ hours saved weekly",
      image: "/financial-dashboard-charts-excel-profit-loss-repor.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real-world applications of machine learning, data analytics, and automation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col border-2 hover:border-primary/30"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && <p className="text-sm text-accent font-semibold mt-2">{project.subtitle}</p>}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <Trophy className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm font-semibold text-primary">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
