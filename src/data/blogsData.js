import homeCopy from '../../copy/home.json'

export const blogCategories = [
    'All',
    'Pediatric Care',
    'Family Support',
    'GAPP & Funding',
    'Medical Safety',
    'Therapies',
    'School Support'
];

export const blogsData = [
    {
        id: 1,
        title: "Understanding GAPP: A Guide for Georgia Families",
        category: "GAPP & Funding",
        date: "January 20, 2024",
        readTime: "6 min read",
        excerpt: "Navigate the eligibility requirements and benefits of the Georgia Pediatric Program (GAPP) to secure skilled nursing care for your medically fragile child.",
        image: homeCopy.images.blog.articleImages[0],
        content: `For parents of children with complex medical needs in Georgia, the Georgia Pediatric Program (GAPP) is a lifeline. Yet, navigating the eligibility requirements and application process can feel overwhelming. This guide breaks down what GAPP is, who helps, and how it can support your family.

**What is GAPP?**
The Georgia Pediatric Program (GAPP) is a Medicaid program designed to serve children under the age of 21 who are medically fragile and require skilled nursing care or personal care supervision. The goal of the program is to allow these children to receive safe, quality care in their own homes rather than in a hospital or long-term care facility.

**Who is Eligible?**
To qualify for GAPP, a child must be:
- Eligible for Medicaid.
- Under 21 years of age.
- Requires a level of care typically provided in a hospital or nursing facility (medically fragile).
- Need skilled nursing services (e.g., G-tube feeding, tracheostomy care, ventilator monitoring) or personal care support.

**Services Provided**
GAPP covers "medically necessary" services, which primarily include:
1.  **Skilled Nursing Services (SNS):** Registered Nurses (RNs) or Licensed Practical Nurses (LPNs) provide direct medical care, monitor health status, and administer medications.
2.  **Personal Care Support (PCS):** Assistance with activities of daily living (ADLs) such as bathing, dressing, and feeding for eligible children.

**How B'Nore Care Helps**
As an approved GAPP provider, B'Nore Care works directly with your family and your child's physician to establish a plan of care. We handle the paperwork, coordinate with the state for approval, and staff your home with compassionate, highly trained pediatric nurses.

We know that funding is one of the biggest stressors for special needs families. Our team allows you to focus on being a parent while we handle the administrative complexities of securing the care your child deserves.`,
        tags: ["GAPP", "Medicaid", "Pediatric Nursing", "Funding"],
        author: {
            name: "Dr. Sarah Johnson",
            title: "Pediatric Care Coordinator",
            image: homeCopy.images.blog.profileImages[0]
        }
    },
    {
        id: 2,
        title: "Tracheostomy Safety at Home: Tips for Parents",
        category: "Medical Safety",
        date: "February 2, 2024",
        readTime: "8 min read",
        excerpt: "Essential safety tips and routine maintenance advice for parents caring for a child with a tracheostomy at home.",
        image: homeCopy.images.blog.articleImages[1],
        content: `Bringing a child home with a tracheostomy is a major milestone, but it also comes with significant responsibility. Ensuring a safe environment and sticking to a consistent care routine are critical for your child's health and your peace of mind.

**1. Establish a Clean Safe Zone**
Designate a specific area in your home for tracheostomy care. This area should be well-lit, free of dust and pet dander, and stocked with all necessary supplies. Always wash your hands thoroughly before handling the trach or supplies.

**2. The Go-Bag Essentials**
You should never leave the house—or even move to a different floor of your home—without your emergency "Go-Bag." This bag should contain:
- Two spare trach tubes (one the same size, one a size smaller).
- Portable suction machine and catheters.
- Ambu bag (manual resuscitator).
- Scissors and new trach ties.
- Water-soluble lubricant.
- Emergency contact numbers.

**3. Humidity is Key**
Air inhaled through the nose is naturally warmed and humidified. A trach bypasses this natural system. Use a heat and moisture exchanger (HME) or a trach collar with a humidifier to prevent secretions from becoming thick and plugging the tube.

**4. Suctioning Best Practices**
Only suction when necessary to clear secretions, rather than on a strict schedule, unless ordered otherwise. Watch for signs like increased work of breathing, rattling sounds, or a drop in oxygen saturation.

**5. Partnering with Your Nurse**
At B'Nore Care, our nurses are experts in tracheostomy management. Use them as a resource! Ask them to observe your technique, teach you new troubleshooting skills, and help you organize your supplies. You are not alone in this journey.`,
        tags: ["Tracheostomy", "Medical Safety", "Home Care", "Pediatrics"],
        author: {
            name: "Nurse Elena Rodriguez",
            title: "Clinical Lead",
            image: homeCopy.images.blog.profileImages[1]
        }
    },
    {
        id: 3,
        title: "Combatting Burnout: The Importance of Respite for Special Needs Parents",
        category: "Family Support",
        date: "January 15, 2024",
        readTime: "5 min read",
        excerpt: "Why taking a break isn't selfish—it's essential. Learn how professional home care provides the respite parents need to function at their best.",
        image: homeCopy.images.blog.articleImages[2],
        content: `Parenting a child with complex medical needs is a 24/7 job that requires the vigilance of an ICU nurse and the heart of a parent. It is physically exhausting and emotionally draining. "Caregiver burnout" is real, and it affects the entire family dynamic.

**Recognizing Burnout**
Signs of burnout include chronic fatigue, irritability, withdrawal from friends, sleep disturbances, and feelings of resentment or hopelessness. If you are running on empty, you cannot provide the best care for your child.

**Reframing Respite**
Many parents feel guilty about leaving their medically fragile child with someone else. Reframe "respite" not as "checking out," but as "refueling." Just as you must put on your own oxygen mask first on a plane, you must safeguard your own mental and physical health to be the advocate your child needs.

**How Home Care Provides Freedom**
Private duty nursing isn't just about medical tasks; it's about giving you freedom.
- **Sleep through the night:** Knowing a skilled nurse is monitoring your child's ventilator or seizure activity allows you to get restorative sleep.
- **Spend time with siblings:** Brothers and sisters of special needs children often need extra attention. Home care frees you up to attend their soccer games or help with homework.
- ** reconnect with your partner:** Go on a date night without worrying about who is watching the monitors.

At B'Nore Care, we honor the trust you place in us. We aren't just caring for a patient; we are caring for a family.`,
        tags: ["Caregiver Burnout", "Respite", "Mental Health", "Family Support"],
        author: {
            name: "David Chen",
            title: "Family Support Specialist",
            image: homeCopy.images.blog.profileImages[2]
        }
    },
    {
        id: 4,
        title: "Transitioning from NICU/PICU to Home",
        category: "Pediatric Care",
        date: "February 10, 2024",
        readTime: "7 min read",
        excerpt: "A roadmap for parents preparing to bring their medically complex child home from the hospital for the first time.",
        image: homeCopy.images.blog.articleImages[3],
        content: `Leaving the safety net of the NICU or PICU can be terrifying. In the hospital, monitors beep, and nurses are seconds away. Going home means becoming the primary decision-maker for your child's care. Here is how to prepare for a successful transition.

**1. Master the Equipment**
Before discharge, spend as much time as possible performing "hands-on" care in the hospital. Learn to troubleshoot the ventilator, change the G-tube, and administer meds. Do not leave until you feel confident in the basics.

**2. Set Up the Nursery**
Organize your home before the baby arrives. Ensure you have dedicated outlets for medical equipment, a refrigerator for medications, and a comfortable chair for nursing or holding the baby.

**3. Confirm Nursing Coverage**
Work with your discharge planner and B'Nore Care to ensure your home nursing schedule is set *before* you walk out the door. Know who is coming and when.

**4. Notify Local Emergency Services**
Call your local EMS and fire department to let them know a medically fragile child lives at your address. They can flag your home for priority response in case of power outages or emergencies.

**5. Give Yourself Grace**
The first few weeks will be an adjustment period. It is okay to be nervous. Lean on your home health nurses—they are there to support your transition and teach you along the way.`,
        tags: ["NICU Discharge", "Home Transition", "Medical Equipment", "New Parents"],
        author: {
            name: "Dr. Emily White",
            title: "Pediatrician",
            image: homeCopy.images.blog.profileImages[3]
        }
    },
    {
        id: 5,
        title: "G-Tube Feeding Tips for Beginners",
        category: "Pediatric Care",
        date: "December 5, 2023",
        readTime: "6 min read",
        excerpt: "Practical advice for managing gastrostomy tubes (G-tubes) and ensuring your child gets proper nutrition without the stress.",
        image: homeCopy.images.blog.articleImages[4],
        content: `For many children with special needs, oral feeding isn't safe or sufficient. A G-tube provides a direct route for nutrition, but it can be intimidating for new parents. Here are some pro-tips to make feeding time easier.

**Keep the Site Clean and Dry**
Skin irritation is the most common issue. Clean the stoma site daily with mild soap and water. Keep it dry—gauze or specific G-tube pads can help absorb leakage.

**preventing Clogs**
Flush the tube with water before and after every feed and medication administration. Modern formulas can be thick; warm water flushes are your best friend against clogs.

**Managing "Feeding Intolerance"**
If your child seems bloated, gassy, or is vomiting after feeds, talk to your doctor. You may need to adjust the rate of the feed, switch to a continuous drip instead of a bolus, or change the formula type.

**Involving Your Child**
Even if your child is tube-fed, include them in family mealtime. specialized chairs allow them to sit at the table. If safe, offer a pacifier or small tastes (oral stimulation) during tube feeds to create a positive association with fullness.

**Nursing Support**
Our nurses at B'Nore Care monitor weight gain, hydration status, and tolerance to feeds. We handle the complex math of calories and fluid intake so you can focus on cuddling and playing.`,
        tags: ["Nutrition", "G-Tube", "Feeding Tube", "Pediatric Care"],
        author: {
            name: "Jennifer Adams, RD",
            title: "Pediatric Nutritionist",
            image: homeCopy.images.blog.profileImages[3]
        }
    },
    {
        id: 6,
        title: "Navigating School with Medical Needs",
        category: "School Support",
        date: "March 1, 2024",
        readTime: "7 min read",
        excerpt: "Understanding IEPs, 504 plans, and how private duty nurses can accompany your child to school to ensure their safety and inclusion.",
        image: homeCopy.images.blog.articleImages[5],
        content: `Every child has a right to education, regardless of their medical complexity. For medically fragile children, attending school requires careful planning and support.

**IEP vs. 504 Plan**
- **IEP (Individualized Education Program):** For students who need specialized instruction due to a disability. It includes educational goals and accommodations.
- **504 Plan:** For students who need accommodations to access the learning environment (e.g., wheelchair ramps, extra time for tests) but do not need specialized instruction.

**The Role of the School Nurse vs. Private Duty Nurse**
School nurses are amazing, but they often care for hundreds of students. A medically fragile child often needs 1:1 attention for suctioning, seizure monitoring, or ventilator management.
Many insurance plans and GAPP allow your private duty nurse (from B'Nore Care) to accompany your child to school. This ensures your child has dedicated medical eyes on them 100% of the time, allowing the teacher to teach and the student to learn.

**Advocating for Inclusion**
Work with the school to ensure your child is included in recess, assemblies, and field trips. Your private nurse can facilitate this safe participation.

Education provides socialization and growth that is vital for development. With the right medical support, the classroom can be a safe and thriving environment for your child.`,
        tags: ["School Nursing", "IEP", "Inclusion", "Special Education"],
        author: {
            name: "Lisa Rodriguez",
            title: "Educational Advocate",
            image: homeCopy.images.blog.profileImages[2]
        }
    }
];

export default { blogsData, blogCategories };
