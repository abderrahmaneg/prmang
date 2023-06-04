import React, { useState } from 'react';
import './ProgramPage.css';

const programData = {
  division1: {
    name: 'المساعدات االجتماعية',
    chapters: [
      {
        name: 'منحة التقاعد',
        text: (
          <div>
            Article 01: Le comité verse l'allocation de retraite à tous les travailleurs et enseignants de l'école qui sont à la retraite, y compris eux-mêmes Bénéficiaires d'une décision de rupture de contrat pour départ à la retraite et retraités d'arrêt de travail long terme.<br />
            <br />
            Article 02: Le montant de cette dotation est estimé à soixante-dix mille (70 000 DA) au maximum.<br />
            <br />
            Article 03: Pour obtenir cette subvention, le dossier suivant doit être déposé :<br />
            - Former.<br />
            - Une attestation de décharge de responsabilité envers les services sociaux.<br />
            - Attestation de suspension de salaire.<br />
            - Une copie de la décision de renvoi à la retraite ou de la décision de rupture de contrat pour cause de départ à la retraite.<br />
            - Une copie du certificat de retraite.<br />
            - Un chèque postal barré pour le bénéficiaire.
          </div>
        ),
      },
      {
        name: 'منحة الوفاة',
        text: (
          <div>
            Article 04: Le capital décès du salarié, du professeur, du travailleur retraité et de leurs familles est versé au décès du travailleur, du conjoint, l'un des enfants ou l'un des parents.<br />
            <br />
            Article 05: Le montant de la subvention est estimé pour chaque cas selon le tableau suivant:<br />
            <br />
            <table>
              <tbody>
                <tr>
                  <th>Taper Accorder</th>
                  <th>Le décès du travailleur avant la retraite</th>
                  <th>Le décès du retraité</th>
                  <th>la mort du mari</th>
                  <th>mort du fils</th>
                  <th>Décès d'un parent</th>
                </tr>
                <tr>
                  <td>Personne ne meurt</td>
                  <td>100.000 DZD</td>
                  <td>50.000 DZD
                    Sans limite
                    les troisièmes années
                  </td>
                  <td>70.000 DZD</td>
                  <td>70.000 DZD</td>
                  <td>40.000 DZD</td>

                </tr>
                <tr>
                  <td>déposer</td>
                  <td colspan="2"> <div>- Former   <br />
                    Un certificat de travail ou une copie d'une décision
                    Renvoi à la retraite  <br />
                    - Acte de décès du travailleur  <br />
                    - N° d'acte de naissance du défunt.   <br />
                    Copie De la B.T. nationale au déposant du dossier . <br />
                    Un chèque postal barré pour le bénéficiaire</div></td>
                  <td><div> - Former<br />
                    - attestation de travail<br />
                    - Chèque postal barré pour le bénéficiaire<br />
                    - Acte de décès du mari<br />
                    - Certificat de famille
                    pour le travailleur
                  </div></td>
                  <td><div> - Former<br />
                    - attestation de travail<br />
                    - Chèque postal barré pour le bénéficiaire<br />
                    - Acte de décès
                    fils<br />
                    - Certificat de naissance Non
                    12 pour le défunt
                  </div></td>
                  <td><div> - Former<br />
                    - attestation de travail<br />
                    - Chèque postal barré pour le bénéficiaire<br />
                    - Acte de décès
                    le parent<br />
                    -Certificat de famille
                    le parent
                  </div></td>

                </tr>

              </tbody>
            </table>

          </div>
        ),

      },
      {
        name: 'منحة الزواج',
        text: (
          <div>
            Article 06: Le comité offre aux ouvriers et aux enseignants une allocation de mariage sur le contrat de mariage.<br />
            <br />
            Article 07: La valeur de cette subvention est estimée à vingt mille (20 000 DZD).<br />
            <br />
            Article 08: Pour obtenir cette subvention, le dossier suivant doit être déposé :<br />
            - Former.<br />
            - Attestation de travail.<br />
            - Contrat de mariage.<br />
            - Un chèque postal barré pour le bénéficiaire.
          </div>
        ),
      },
      {
        name: 'منحة المولود الجديد',
        text: (
          <div>
            Article 09: Le comité met à la disposition des ouvriers et des enseignants des écoles une allocation pour le nouveau-né.<br />
            <br />
            Article 10: La valeur de cette subvention est estimée à dix mille (10.000 DZD).<br />
            <br />
            Article 11: Pour obtenir cette bourse, le dossier suivant doit être déposé :<br />
            - Former.<br />
            - Attestation de travail.<br />
            - Acte de naissance du nouveau-né.<br />
            - Un chèque postal barré pour le bénéficiaire.
          </div>
        ),
      },
      {
        name: 'منحة ختان المولود الجديد',
        text: (
          <div>
            Article 12: Le comité offre aux ouvriers et instituteurs une bourse pour la circoncision du nouveau-né.<br />
            <br />
            Article 13: La valeur de cette subvention est estimée à cinq mille (5.000) DZD.<br />
            <br />
            Article 14: Pour obtenir cette bourse, le dossier suivant doit être déposé:<br />
            - Former.<br />
            - Attestation de travail.<br />
            - Acte de circoncision de naissance.<br />
            - Un chèque postal barré pour le bénéficiaire.
          </div>
        ),
      },
    ],
  },
  division2: {
    name: 'الخدمـات الصــحيـة',
    chapters: [
      {
        name: 'العمليات الجراحية',
        text: (
          <div>
            Article 15: Le comité s'engage à payer 25% de la valeur des interventions chirurgicales n'excédant pas cent cinquante mille.<br />
            (150 000 DZD), qui est versée au personnel scolaire et aux enseignants, ainsi qu'aux enfants parrainés (mineurs et enseignants).<br />
            jusqu'à l'âge de 21 ans et la fille jusqu'à son mariage) et les conjoints non affiliés à la Caisse de Sécurité Sociale<br />
            (CNAS) ou la Caisse nationale des non-salariés (CASNOS), et 10% pour les actifs.<br />
            <br />
            Article 16: Les césariennes sont limitées à cinquante mille dinars (50 000 DZD) au maximum.<br />
            <br />
            Article 17: Les interventions chirurgicales prises en charge par la Caisse Nationale de Sécurité Sociale ne sont pas indemnisées par un pourcentage<br />
            100%<br />
            <br />
            Article 18: Pour obtenir cette aide, le dossier suivant doit être déposé :<br />
            - Former<br />
            Certificat de travail du salarié.<br />
            Un rapport médical diagnostiquant la maladie et nécessitant une intervention chirurgicale.<br />
            - Facture du processus avec les spécifications légales.<br />
            - Une attestation de non-affiliation à la Caisse Nationale de la démarche ou d'affiliation pour les non-salariés (pour le parrainé de plus de 21 ans).<br />
            - Attestation de famille ou attestation d'acquisition de droits extraite de la Sécurité Sociale (pour le parrainé de plus de 21 ans).<br />
            Un certificat de non-mariage pour une fille de plus de 21 ans.<br />
            Un chèque postal barré pour le bénéficiaire.
          </div>
        ),

      },
      {
        name: 'الحمامات المعدنية',
        text: (
          <div>
            Article 19: Le comité s'engage à payer 25% de la valeur du traitement dans les bains minéraux, qui ne dépasse pas cinquante mille<br />
            (50 000 DA)<br />
            <br />
            Article 20: Pour bénéficier des bains minéraux, le dossier suivant doit être déposé :<br />
            - Former.<br />
            - attestation de travail.<br />
            - Un rapport médical précisant le besoin de traitement du patient, indiqué par un spécialiste.<br />
            - Facture du processus avec les spécifications légales.<br />
            Un chèque postal barré pour le bénéficiaire.
          </div>
        ),

      },

    ],
  },
  division3: {
    name: 'التضامن',
    chapters: [
      {
        name: 'مساعدات عن الحوادث والكوارث',
        text: (
          <div>
            Article 21: Le comité apporte une aide financière au personnel scolaire et aux enseignants touchés par un accident ou une catastrophe naturelle.<br />
            <br />
            Article 22: Le dossier est transmis à la commission d'instruction.<br />
            <br />
            Article 23: Le montant de cette aide est estimé à cinquante mille dinars (50.000 DZD) au maximum.<br />
            <br />
            Article 24: Pour obtenir cette aide, le dossier suivant doit être déposé:<br />
            - Former.<br />
            Certificat de travail ou copie.<br />
            - Certificat de victime ou rapport d'intervention remis par les autorités compétentes.<br />
            - Fiche technique d'un expert pour fournir l'importance des pertes.<br />
            - Procès-verbal d'inspection préparé par le comité.<br />
            Un chèque postal barré pour la personne lésée.
          </div>
        ),

      },
      {
        name: 'مساعدات عن الحالات الجتماعية والصحيةالقاهرة',
        text: (
          <div>
            Article 25: Le comité apporte une aide financière au personnel de l'école et aux enseignants qui ont besoin d'une aide disciplinaire pour l'appréciation du comité.<br />
            <br />
            Article 26: Le montant de cette aide est estimé à cinquante mille (50.000 DA) au maximum.<br />
            <br />
            Article 27: Pour obtenir cette aide, le dossier suivant doit être déposé:<br />
            - Former.<br />
            Certificat de travail ou copie.<br />
            Certificats et documents prouvant le besoin d'assistance.<br />
            Procès-verbal préparé par le comité.<br />
            Un chèque postal barré pour la personne lésée.
          </div>
        ),

      },

    ],
  },
  division4: {
    name: 'السلف االجتماعية',
    chapters: [
      {
        name: 'السلفة االستثنائية',
        text: (
          <div>
            Article 28: Le comité accorde cette avance au personnel de l'école et aux enseignants en tant que de besoin.<br />
            <br />
            Article 29: Le montant de cette avance est estimé à cinquante mille (50 000 DA) au maximum. Le comité peut modifier le montant de l'avance, en fonction du montant de la retenue et des revenus mensuels du bénéficiaire.<br />
            <br />
            Article 30: Le montant de la retenue mensuelle est déterminé par le comité.<br />
            <br />
            Article 31: Pour obtenir cette avance, le dossier suivant doit être déposé:<br />
            - Former<br />
            - Attestation de travail<br />
            - Déclaration de salaire d'au moins un mois avant le dépôt du dossier<br />
            - Certificat de remise de dette du comité<br />
            - Le contrat d'avance sociale est visé et délivré par le comité<br />
            - Un organisme de prélèvement agréé par le comité<br />
            - Un document prouvant que la personne concernée a besoin de ce prêt<br />
            - Un chèque postal barré pour le bénéficiaire
          </div>
        ),
      },

    ],
  },
  division5: {
    name: 'النشاطات الثقافية',
    chapters: [
      {
        name: 'النشاط الرياضي',
        text: (
          <div>
            Article 32: Le comité organise des tournois sportifs au profit des personnels scolaires et des enseignants pour relancer les fêtes et fêtes religieuses nationales.<br />
            <br />
            Article 33: Le comité s'occupe des stages sportifs au profit des personnels scolaires et des enseignants.<br />
            <br />
            Article 34: Les modalités d'organisation et de financement des stages susvisés seront déterminées ultérieurement.
          </div>
        ),
      },
    ],
  },
};

const ProgramPage = () => {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedChapter('');
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  const divisionOptions = Object.keys(programData);

  const chapterOptions = selectedDivision
    ? programData[selectedDivision].chapters
    : [];


  const defaultText = (
    <div>
      l'examinateur :<br />
      Vu le décret exécutif 82-179 du 15 mai 1982 précisant le contenu des prestations sociales
      et comment le financer.
      <br />
      Vu le décret exécutif 303-82 du 11 septembre 1982 relatif à la gestion des services social.
      <br />
      Vu le décret exécutif n°14-232 du 25 août 2014 portant création de l'Ecole Supérieure
      Pour une information automatisée à Sidi Bel Abbes,
      <br />
      Vu le procès-verbal en date du 09 janvier 2019, comprenant la composition des membres du comité des services sociaux au
      Ecole Supérieure d'Informatique de Sidi Bel Abbes,
      <br />
      Sur la base de la résolution ministérielle n ° 32 du 19-11-2020, qui comprend la création et la formation du comité des services
      social.
    </div>);

  const text = selectedChapter && selectedDivision
    ? programData[selectedDivision].chapters.find(chapter => chapter.name === selectedChapter).text
    : defaultText;


  return (
    <div className='program-containare'>
      <h1>Consult Program</h1>

      <div className='program-select' >
        <label htmlFor="division">Select Division:</label>
        <select
          id="division"
          value={selectedDivision}
          onChange={handleDivisionChange}
        >
          <option value="">-- Select Division --</option>
          {divisionOptions.map((division) => (
            <option key={division} value={division}>
              {programData[division].name}
            </option>
          ))}
        </select>
      </div>

      <div className='program-select'>
        <label htmlFor="chapter">Select Chapter:</label>
        <select
          id="chapter"
          value={selectedChapter}
          onChange={handleChapterChange}
        >
          <option value="">-- Select Chapter --</option>
          {chapterOptions.map((chapter) => (
            <option key={chapter.name} value={chapter.name}>
              {chapter.name}
            </option>
          ))}
        </select>
      </div>

      <div className='program-text'>

        <p>{text}</p>

      </div>
    </div>
  );
};


export default ProgramPage;
