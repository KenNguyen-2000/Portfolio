import { HeaderBar, HeroSection } from '@/components';
import ContactSection from '@/components/ContactSection/ContactSection';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import SkillSection from '@/components/SkillSection/SkillSection';
import ObserverWrapper from '@/hoc/ObserverWrapper';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      {new Array(5).fill('').map((_, i) => (
        <span
          key={i}
          className={`${styles['vertical-line']} ${styles[`line-${i + 1}`]}`}
        ></span>
      ))}

      <div className="flex flex-col min-h-screen">
        <HeaderBar />
        <main className={styles['main-wrapper']}>
          <ObserverWrapper>
            <HeroSection />
            <ProjectSection />
            <SkillSection />
            <ContactSection />
          </ObserverWrapper>
        </main>
      </div>
    </>
  );
}
