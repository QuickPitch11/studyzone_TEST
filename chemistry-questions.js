// CHEMISTRY QUIZ - 40 Questions
// Copy this entire array into chemistry-quiz.html replacing the questionBank array

const questionBank = [
  {
    question: "What is the electron configuration of a neutral iron (Fe) atom in its ground state?",
    options: ["1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶", "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p⁶", "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁷"],
    correct: 0,
    explanation: "Iron (Fe) has 26 electrons. Following the Aufbau principle, electrons fill orbitals in order of increasing energy. The 4s orbital fills before 3d, giving the configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. This configuration accounts for all 26 electrons and represents the lowest energy state of the atom."
  },
  {
    question: "Which of the following compounds exhibits the highest degree of ionic character?",
    options: ["NaCl", "MgO", "CsF", "AlCl₃", "CaCO₃"],
    correct: 2,
    explanation: "CsF exhibits the highest ionic character because it combines cesium (the most electropositive element in this list) with fluorine (the most electronegative element). The large difference in electronegativity between Cs and F results in nearly complete electron transfer. According to Fajans' rules, larger cations and smaller anions favor ionic bonding, and Cs⁺ is the largest cation while F⁻ is the smallest anion among these options."
  },
  {
    question: "What is the pH of a 0.001 M solution of HCl at 25°C?",
    options: ["1", "2", "3", "4", "7"],
    correct: 2,
    explanation: "HCl is a strong acid that completely dissociates in water, so [H⁺] = 0.001 M = 1 × 10⁻³ M. The pH is calculated using pH = -log[H⁺] = -log(1 × 10⁻³) = 3. Strong acids like HCl undergo complete ionization in dilute aqueous solutions, making pH calculations straightforward."
  },
  {
    question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing the pressure will shift the equilibrium in which direction?",
    options: ["To the left (toward reactants)", "To the right (toward products)", "No shift will occur", "The equilibrium constant will change", "The reaction will stop"],
    correct: 1,
    explanation: "According to Le Chatelier's principle, increasing pressure shifts equilibrium toward the side with fewer moles of gas. The reactant side has 4 moles of gas (1 N₂ + 3 H₂) while the product side has 2 moles of NH₃. Therefore, increasing pressure favors the forward reaction, shifting equilibrium to the right to relieve the stress by reducing the total number of gas molecules."
  },
  {
    question: "What is the oxidation state of chromium in the dichromate ion (Cr₂O₇²⁻)?",
    options: ["+3", "+4", "+5", "+6", "+7"],
    correct: 3,
    explanation: "In Cr₂O₇²⁻, oxygen has an oxidation state of -2. For two chromium atoms and seven oxygen atoms: 2(Cr) + 7(-2) = -2. Solving gives 2(Cr) = -2 + 14 = +12, so each Cr has an oxidation state of +6. This high oxidation state makes dichromate a strong oxidizing agent commonly used in redox titrations."
  },
  {
    question: "Which quantum number determines the shape of an atomic orbital?",
    options: ["Principal quantum number (n)", "Angular momentum quantum number (l)", "Magnetic quantum number (mₗ)", "Spin quantum number (mₛ)", "Azimuthal quantum number only"],
    correct: 1,
    explanation: "The angular momentum quantum number (l) determines the shape of the orbital. For l = 0 (s orbital), the shape is spherical; l = 1 (p orbital) gives a dumbbell shape; l = 2 (d orbital) produces more complex shapes. The principal quantum number (n) determines size and energy, while mₗ determines spatial orientation."
  },
  {
    question: "Calculate the molarity of a solution prepared by dissolving 4.9 g of H₂SO₄ in enough water to make 500 mL of solution. (Molar mass of H₂SO₄ = 98 g/mol)",
    options: ["0.05 M", "0.10 M", "0.20 M", "0.50 M", "1.0 M"],
    correct: 1,
    explanation: "Molarity = moles/liters. First, calculate moles: 4.9 g ÷ 98 g/mol = 0.05 mol. Then divide by volume in liters: 0.05 mol ÷ 0.5 L = 0.10 M. This calculation demonstrates the fundamental relationship between mass, molar mass, and concentration in solution chemistry."
  },
  {
    question: "What type of hybridization does the central carbon atom exhibit in methane (CH₄)?",
    options: ["sp", "sp²", "sp³", "sp³d", "sp³d²"],
    correct: 2,
    explanation: "In methane, the central carbon atom forms four equivalent C-H sigma bonds arranged in a tetrahedral geometry. This requires sp³ hybridization, where one s orbital and three p orbitals combine to form four equivalent sp³ hybrid orbitals. Each hybrid orbital contains one electron that pairs with a hydrogen 1s electron to form a bond."
  },
  {
    question: "Which of the following molecules is nonpolar despite containing polar bonds?",
    options: ["H₂O", "NH₃", "CO₂", "HCl", "CH₃OH"],
    correct: 2,
    explanation: "CO₂ is linear with two polar C=O bonds that are symmetrically arranged at 180° from each other. The bond dipoles are equal in magnitude but opposite in direction, causing them to cancel out completely, resulting in a net dipole moment of zero. This demonstrates that molecular geometry is crucial in determining overall polarity."
  },
  {
    question: "What is the entropy change (ΔS) for a system during a reversible isothermal expansion of an ideal gas?",
    options: ["ΔS < 0", "ΔS = 0", "ΔS > 0", "ΔS depends on temperature only", "ΔS is undefined"],
    correct: 2,
    explanation: "During isothermal expansion, an ideal gas increases in volume, which increases the number of possible microstates available to the system. Since entropy is a measure of disorder or the number of microstates, ΔS > 0. For an ideal gas, ΔS = nR ln(V₂/V₁), which is positive when V₂ > V₁."
  },
  {
    question: "What is the bond order of the oxygen molecule (O₂) according to molecular orbital theory?",
    options: ["1", "1.5", "2", "2.5", "3"],
    correct: 2,
    explanation: "O₂ has 12 valence electrons. The molecular orbital configuration is (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². Bond order = (bonding electrons - antibonding electrons)/2 = (8 - 4)/2 = 2. This explains the double bond character of O₂ and correctly predicts its paramagnetic nature due to two unpaired electrons in the π* orbitals."
  },
  {
    question: "For a first-order reaction, what percentage of the reactant remains after three half-lives?",
    options: ["6.25%", "12.5%", "25%", "33.3%", "50%"],
    correct: 1,
    explanation: "In a first-order reaction, the amount of reactant remaining after n half-lives is (1/2)ⁿ × 100%. After three half-lives: (1/2)³ = 1/8 = 0.125 = 12.5%. This exponential decay is characteristic of first-order kinetics, where the half-life is independent of initial concentration."
  },
  {
    question: "Which of the following is the strongest Brønsted-Lowry acid?",
    options: ["HF", "HCl", "HBr", "HI", "H₂O"],
    correct: 3,
    explanation: "Among the hydrogen halides, HI is the strongest acid. As we move down the halogen group, bond strength decreases and atomic size increases, making it easier to dissociate the H-X bond. HI has the weakest H-X bond and forms the most stable conjugate base (I⁻) due to charge dispersal over a large atomic radius, making it the strongest acid in this series."
  },
  {
    question: "What is the standard enthalpy of formation (ΔH°f) for any element in its most stable form at 25°C and 1 atm?",
    options: ["-273.15 kJ/mol", "-1 kJ/mol", "0 kJ/mol", "+1 kJ/mol", "+273.15 kJ/mol"],
    correct: 2,
    explanation: "By definition, the standard enthalpy of formation of any element in its standard state (most stable form at 25°C and 1 atm) is zero. This serves as the reference point for measuring enthalpies of formation of compounds. For example, ΔH°f = 0 for O₂(g), C(graphite), and H₂(g), but not for O₃(g), C(diamond), or individual atoms."
  },
  {
    question: "Which type of intermolecular force is primarily responsible for the high boiling point of water?",
    options: ["London dispersion forces", "Dipole-dipole interactions", "Hydrogen bonding", "Ion-dipole forces", "Covalent bonding"],
    correct: 2,
    explanation: "Hydrogen bonding is the strongest intermolecular force present in water and is responsible for its unusually high boiling point (100°C) compared to other similar-sized molecules. Hydrogen bonding occurs between the highly electronegative oxygen atom and the hydrogen atoms of neighboring water molecules. This creates a network of strong intermolecular attractions that require significant energy to overcome during boiling."
  },
  {
    question: "What is the geometry of the SF₆ molecule according to VSEPR theory?",
    options: ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar", "Pentagonal bipyramidal"],
    correct: 2,
    explanation: "SF₆ has six bonding pairs and no lone pairs around the central sulfur atom, giving it an octahedral geometry with 90° bond angles. Sulfur can accommodate six bonds because it can expand its octet by using d orbitals. This geometry minimizes electron pair repulsion and results in a perfectly symmetrical, nonpolar molecule."
  },
  {
    question: "Calculate the wavelength (in nm) of light emitted when an electron in a hydrogen atom transitions from n=3 to n=2. (Rydberg constant R = 1.097 × 10⁷ m⁻¹)",
    options: ["486 nm", "589 nm", "656 nm", "720 nm", "1094 nm"],
    correct: 2,
    explanation: "Using the Rydberg equation: 1/λ = R(1/n₁² - 1/n₂²) = 1.097 × 10⁷(1/4 - 1/9) = 1.097 × 10⁷(0.139) = 1.524 × 10⁶ m⁻¹. Therefore, λ = 6.56 × 10⁻⁷ m = 656 nm. This is the red H-alpha line in the Balmer series, visible in hydrogen emission spectra and commonly observed in astronomical observations."
  },
  {
    question: "For the reaction 2A + B → 3C, if the rate of disappearance of A is 0.60 M/s, what is the rate of formation of C?",
    options: ["0.20 M/s", "0.40 M/s", "0.60 M/s", "0.90 M/s", "1.20 M/s"],
    correct: 3,
    explanation: "The rate of a reaction relates to the stoichiometric coefficients. Rate = -(1/2)(Δ[A]/Δt) = -(Δ[B]/Δt) = +(1/3)(Δ[C]/Δt). If -Δ[A]/Δt = 0.60 M/s, then -(1/2)(0.60) = +(1/3)(Δ[C]/Δt). Solving: Δ[C]/Δt = 3 × 0.30 = 0.90 M/s. The rate of formation of C is 1.5 times the rate of disappearance of A due to the 3:2 stoichiometric ratio."
  },
  {
    question: "What is the coordination number of the central metal ion in [Co(NH₃)₆]³⁺?",
    options: ["2", "4", "6", "8", "12"],
    correct: 2,
    explanation: "The coordination number is the number of ligand donor atoms directly bonded to the central metal ion. In [Co(NH₃)₆]³⁺, six ammonia molecules are coordinated to the cobalt(III) ion, giving a coordination number of 6. This complex has an octahedral geometry, which is common for coordination number 6."
  },
  {
    question: "Which of the following buffer systems would be most effective at maintaining a pH of 7.4?",
    options: ["CH₃COOH/CH₃COO⁻ (pKₐ = 4.76)", "NH₄⁺/NH₃ (pKₐ = 9.25)", "H₂PO₄⁻/HPO₄²⁻ (pKₐ = 7.21)", "HCN/CN⁻ (pKₐ = 9.31)", "HCOOH/HCOO⁻ (pKₐ = 3.75)"],
    correct: 2,
    explanation: "A buffer is most effective when the pH is within ±1 unit of the pKₐ of the weak acid. The H₂PO₄⁻/HPO₄²⁻ system has a pKₐ of 7.21, which is closest to the target pH of 7.4. This phosphate buffer system is actually used in human blood to help maintain physiological pH at approximately 7.4."
  },
  {
    question: "What is the change in Gibbs free energy (ΔG°) for a reaction at equilibrium?",
    options: ["ΔG° < 0", "ΔG° = -RT ln K", "ΔG° = 0", "ΔG° > 0", "ΔG° = ΔH° - TΔS°"],
    correct: 2,
    explanation: "At equilibrium, there is no net driving force for the reaction to proceed in either direction, meaning the free energy change is zero (ΔG = 0, not ΔG°). However, note that ΔG° (standard free energy) relates to K through ΔG° = -RT ln K, and is zero only when K = 1. The question asks about the system at equilibrium where ΔG = 0."
  },
  {
    question: "How many grams of NaOH are required to neutralize 50.0 mL of 0.200 M H₂SO₄? (Molar mass of NaOH = 40.0 g/mol)",
    options: ["0.40 g", "0.80 g", "1.60 g", "2.00 g", "4.00 g"],
    correct: 1,
    explanation: "The balanced equation is H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Moles of H₂SO₄ = 0.0500 L × 0.200 M = 0.0100 mol. From stoichiometry, moles of NaOH needed = 2 × 0.0100 = 0.0200 mol. Mass of NaOH = 0.0200 mol × 40.0 g/mol = 0.80 g. This demonstrates the importance of considering stoichiometric ratios in acid-base neutralization reactions."
  },
  {
    question: "Which of the following compounds exhibits optical isomerism (chirality)?",
    options: ["CH₄", "CH₃CH₃", "CH₃CHClCH₃", "CHBrClF", "CH₃CH₂CH₃"],
    correct: 3,
    explanation: "CHBrClF (bromochlorofluoromethane) has a carbon atom bonded to four different groups (H, Br, Cl, F), making it a chiral center. This molecule cannot be superimposed on its mirror image and thus exhibits optical isomerism. The other options either lack a chiral center or have symmetry that prevents optical activity."
  },
  {
    question: "At constant temperature, if the volume of an ideal gas is decreased by a factor of 3, what happens to its pressure?",
    options: ["Decreases by a factor of 3", "Decreases by a factor of 9", "Remains constant", "Increases by a factor of 3", "Increases by a factor of 9"],
    correct: 3,
    explanation: "According to Boyle's Law (P₁V₁ = P₂V₂ at constant temperature), pressure and volume are inversely proportional. If V₂ = V₁/3, then P₁V₁ = P₂(V₁/3), which gives P₂ = 3P₁. The pressure increases by a factor of 3 when volume decreases by the same factor, as the gas molecules collide with the container walls more frequently in a smaller space."
  },
  {
    question: "What is the rate law for a reaction with the mechanism: Step 1: A + B → C (slow), Step 2: C + B → D (fast)?",
    options: ["rate = k[A][B]", "rate = k[A][B]²", "rate = k[C][B]", "rate = k[A]²[B]", "rate = k[D]"],
    correct: 0,
    explanation: "The rate-determining step (slowest step) determines the overall rate law. Since Step 1 is slow, the rate law is based on this step: rate = k[A][B]. The fast second step does not appear in the rate law because it occurs after the rate-determining step. This principle is fundamental to understanding reaction mechanisms and predicting rate laws from proposed mechanisms."
  },
  {
    question: "Which element has the highest first ionization energy?",
    options: ["Lithium (Li)", "Fluorine (F)", "Neon (Ne)", "Sodium (Na)", "Chlorine (Cl)"],
    correct: 2,
    explanation: "Neon has the highest first ionization energy because it has a complete valence shell (1s² 2s² 2p⁶), making it extremely stable. Removing an electron requires disrupting this stable noble gas configuration. First ionization energy generally increases across a period and decreases down a group, with noble gases having the highest values in their respective periods."
  },
  {
    question: "What is the concentration of hydroxide ions [OH⁻] in a solution with pH = 11 at 25°C?",
    options: ["1 × 10⁻¹¹ M", "1 × 10⁻³ M", "1 × 10³ M", "3 M", "11 M"],
    correct: 1,
    explanation: "At 25°C, pH + pOH = 14. If pH = 11, then pOH = 3. Since pOH = -log[OH⁻], we get [OH⁻] = 10⁻³ M = 1 × 10⁻³ M. This calculation demonstrates the inverse relationship between H⁺ and OH⁻ concentrations in aqueous solutions governed by the water ionization constant Kw = 1 × 10⁻¹⁴."
  },
  {
    question: "For the equilibrium N₂O₄(g) ⇌ 2NO₂(g), Kp = 0.36 at 100°C. What is the relationship between Kp and Kc for this reaction? (R = 0.0821 L·atm/(mol·K))",
    options: ["Kp = Kc", "Kp = Kc(RT)", "Kp = Kc/(RT)", "Kp = Kc(RT)⁻¹", "Kp = Kc(RT)²"],
    correct: 1,
    explanation: "The relationship between Kp and Kc is Kp = Kc(RT)^Δn, where Δn is the change in moles of gas. For this reaction, Δn = 2 - 1 = 1, so Kp = Kc(RT)¹ = Kc(RT). This relationship accounts for the difference between pressure-based and concentration-based equilibrium constants for gas-phase reactions."
  },
  {
    question: "Which of the following represents a redox reaction?",
    options: ["NaCl + AgNO₃ → AgCl + NaNO₃", "HCl + NaOH → NaCl + H₂O", "Zn + 2HCl → ZnCl₂ + H₂", "CaCO₃ → CaO + CO₂", "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl"],
    correct: 2,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂ is a redox reaction where zinc is oxidized (Zn⁰ → Zn²⁺) and hydrogen is reduced (H⁺ → H⁰). The other reactions are either precipitation, acid-base, or decomposition reactions without changes in oxidation states. Redox reactions involve the transfer of electrons between species."
  },
  {
    question: "What is the mass percent of carbon in glucose (C₆H₁₂O₆)? (Atomic masses: C = 12, H = 1, O = 16)",
    options: ["26.7%", "33.3%", "40.0%", "53.3%", "66.7%"],
    correct: 2,
    explanation: "Molar mass of C₆H₁₂O₆ = 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180 g/mol. Mass of carbon = 72 g. Mass percent = (72/180) × 100% = 40.0%. This calculation is important in determining empirical formulas and in quantitative analysis of organic compounds."
  },
  {
    question: "Which of the following molecules has a dipole moment of zero?",
    options: ["H₂O", "NH₃", "BF₃", "SO₂", "CH₃Cl"],
    correct: 2,
    explanation: "BF₃ has a trigonal planar geometry with three B-F bonds at 120° angles. Despite each B-F bond being polar, the symmetrical arrangement causes the individual bond dipoles to cancel out completely, resulting in a net dipole moment of zero. This illustrates how molecular symmetry can result in nonpolar molecules even when polar bonds are present."
  },
  {
    question: "What type of reaction is 2H₂O₂(aq) → 2H₂O(l) + O₂(g)?",
    options: ["Combination", "Decomposition", "Single displacement", "Double displacement", "Combustion"],
    correct: 1,
    explanation: "This is a decomposition reaction where hydrogen peroxide breaks down into water and oxygen gas. Decomposition reactions involve a single compound breaking down into two or more simpler substances. This particular reaction is catalyzed by enzymes like catalase in biological systems or by metal oxides in laboratory settings."
  },
  {
    question: "Calculate the molality of a solution prepared by dissolving 10.0 g of NaCl (molar mass 58.5 g/mol) in 500 g of water.",
    options: ["0.171 m", "0.342 m", "0.500 m", "0.684 m", "1.00 m"],
    correct: 1,
    explanation: "Molality (m) = moles of solute / kg of solvent. Moles of NaCl = 10.0 g ÷ 58.5 g/mol = 0.171 mol. Mass of water in kg = 500 g ÷ 1000 = 0.500 kg. Molality = 0.171 mol ÷ 0.500 kg = 0.342 m. Unlike molarity, molality is temperature-independent because it's based on mass rather than volume."
  },
  {
    question: "Which of the following represents the Arrhenius equation?",
    options: ["k = Ae^(Ea/RT)", "k = Ae^(-Ea/RT)", "ln k = -Ea/R + ln A", "k = A - Ea/RT", "k = RT/Ea"],
    correct: 1,
    explanation: "The Arrhenius equation is k = Ae^(-Ea/RT), where k is the rate constant, A is the frequency factor, Ea is activation energy, R is the gas constant, and T is temperature in Kelvin. This equation shows that reaction rate increases exponentially with temperature and decreases with higher activation energy. It's fundamental to understanding temperature dependence of reaction rates."
  },
  {
    question: "What is the formal charge on nitrogen in the nitrate ion (NO₃⁻)?",
    options: ["-1", "0", "+1", "+2", "+3"],
    correct: 2,
    explanation: "In the most common Lewis structure of NO₃⁻, nitrogen has one double bond and two single bonds to oxygen atoms, with no lone pairs. Formal charge = valence electrons - (lone pair electrons + ½ bonding electrons) = 5 - (0 + ½(8)) = 5 - 4 = +1. The overall -1 charge of the ion is distributed among the oxygen atoms, with the nitrogen bearing a +1 formal charge."
  },
  {
    question: "According to the Pauli Exclusion Principle, what is the maximum number of electrons that can occupy a single atomic orbital?",
    options: ["1", "2", "4", "6", "8"],
    correct: 1,
    explanation: "The Pauli Exclusion Principle states that no two electrons in an atom can have the same set of four quantum numbers. Since electrons in the same orbital have the same n, l, and mₗ values, they must differ in spin quantum number (mₛ = +½ or -½). Therefore, a maximum of two electrons with opposite spins can occupy a single orbital."
  },
  {
    question: "Which functional group characterizes aldehydes?",
    options: ["-OH", "-COOH", "-CHO", "-CO-", "-NH₂"],
    correct: 2,
    explanation: "Aldehydes are characterized by the -CHO functional group, where a carbonyl group (C=O) is bonded to a hydrogen atom and an R group. The carbonyl carbon is at the end of the carbon chain in aldehydes, distinguishing them from ketones where the carbonyl is internal. Common examples include formaldehyde (HCHO) and acetaldehyde (CH₃CHO)."
  },
  {
    question: "For the cell reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), if E°cell = +1.10 V, what is the standard free energy change (ΔG°)? (F = 96,485 C/mol, n = 2)",
    options: ["+212 kJ/mol", "+106 kJ/mol", "0 kJ/mol", "-106 kJ/mol", "-212 kJ/mol"],
    correct: 4,
    explanation: "The relationship between standard cell potential and free energy is ΔG° = -nFE°cell. Substituting: ΔG° = -2 × 96,485 C/mol × 1.10 V = -212,267 J/mol ≈ -212 kJ/mol. The negative value indicates this is a spontaneous reaction under standard conditions, which is consistent with the positive cell potential."
  },
  {
    question: "Which statement correctly describes the solubility of gases in liquids?",
    options: ["Solubility increases with increasing temperature", "Solubility decreases with increasing pressure", "Solubility increases with increasing pressure", "Solubility is independent of temperature and pressure", "Solubility only depends on the nature of the gas"],
    correct: 2,
    explanation: "According to Henry's Law, the solubility of a gas in a liquid is directly proportional to the partial pressure of that gas above the liquid at constant temperature. Higher pressure forces more gas molecules into solution. However, gas solubility generally decreases with increasing temperature because higher kinetic energy allows gas molecules to escape from solution more easily."
  },
  {
    question: "What is the hybridization of the carbon atom in carbon dioxide (CO₂)?",
    options: ["sp", "sp²", "sp³", "sp³d", "No hybridization"],
    correct: 0,
    explanation: "In CO₂, the central carbon atom forms two double bonds with oxygen atoms in a linear geometry (O=C=O). This linear arrangement requires sp hybridization, where one s orbital and one p orbital combine to form two sp hybrid orbitals at 180° apart. The remaining two unhybridized p orbitals on carbon form π bonds with oxygen, creating the two C=O double bonds."
  }
];
