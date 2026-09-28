export type EssayBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }

export type Essay = {
  slug: string
  title: string
  dek: string
  date: string
  category: string
  readTimeMin: number
  coverImage?: string
  blocks: EssayBlock[]
  status: 'published' | 'draft'
}

// Add essays here and place their images in public/images/writing/.
export const essays: Essay[] = [
  {
    slug: 'ai-can-close-a-support-ticket',
    title: 'AI Can Close a Support Ticket. That Doesn’t Mean It Solved the Problem.',
    dek: 'A support interaction can be complete while the customer is still stuck. We should measure AI support by the problems it resolves, not the tickets it closes.',
    date: '2026-09-28',
    category: 'AI & product',
    readTimeMin: 8,
    status: 'published',
    blocks: [
      { type: 'paragraph', text: 'I have been thinking a lot about how companies are using AI-powered chatbots for customer support. On paper, it makes a lot of sense. A company can handle a much larger number of customer queries without requiring a proportional increase in support staff, customers do not have to wait on hold, and simple problems can potentially be resolved much faster.' },
      { type: 'paragraph', text: 'But as a customer, I have started noticing a pattern that concerns me. Sometimes the chatbot seems to be more interested in **finishing the conversation than actually solving the problem**.' },
      { type: 'paragraph', text: 'I experienced this recently with Swiggy. I had ordered chicken tacos from California Burrito, but what I received was a chicken salad. Before that, I had also raised a completely separate complaint because my order was running late. That was eventually delivered a little late, so I did not really have an issue with it. The wrong order, however, was a pretty straightforward problem.' },
      { type: 'paragraph', text: 'I went to Swiggy’s Help section and raised a complaint. The chatbot asked me to upload a picture of what I had received, which I did. It then asked me what I had originally ordered and what I had received instead, and I explained that I had ordered chicken tacos and received a salad. At one point, I even selected the option to speak to an agent. The chatbot told me that the issue needed further investigation and that a specialist would respond to me over email.' },
      { type: 'paragraph', text: 'So far, this seemed reasonable. And then the conversation was marked as closed. I eventually received an email response saying that they could not find anything wrong with the order, even though I had already uploaded a photograph of the wrong item.' },
      { type: 'paragraph', text: 'That experience left me with a very simple question: **what exactly had been resolved?**' },
      { type: 'paragraph', text: 'The support conversation had been completed. My problem had not.' },
      { type: 'paragraph', text: 'I had a surprisingly similar experience with Airtel. My Wi-Fi had been intermittently stopping for several days. It would work normally, then stop completely, and then come back again. Normally, I would raise a complaint through the Airtel app, receive a complaint number, and have a technician call me within a few hours to understand the problem and figure out when they could visit.' },
      { type: 'paragraph', text: 'This time, the experience was very different. The chatbot asked me a number of questions and eventually recommended that I restart my modem. The problem was that I had already restarted it multiple times, and it had not fixed the issue. When I told the chatbot that restarting the modem was not helping, the conversation essentially came to an end. There was no complaint number, no clear way to request a technician, and when I tried calling customer support directly, I was simply directed back to the Help section in the Airtel app.' },
      { type: 'paragraph', text: 'I was stuck in the same place I had started.' },
      { type: 'paragraph', text: 'Again, the system had successfully completed a support interaction, but I still did not have working internet.' },
      { type: 'paragraph', text: 'As a Product Manager, this is the part that bothers me most.' },
      { type: 'paragraph', text: 'I completely understand why companies want to move towards AI-powered customer support. It can reduce operational costs, handle large volumes of conversations, and make support more efficient. There is nothing inherently wrong with any of that. In fact, when done well, AI can make customer support dramatically better.' },
      { type: 'paragraph', text: 'The problem starts when **efficiency becomes the primary definition of success**.' },
      { type: 'paragraph', text: 'A chatbot can look extremely successful on a dashboard because it is handling conversations quickly, reducing human interventions and closing a large percentage of tickets. But none of those metrics, on their own, tell us whether the customer’s problem was actually solved.' },
      { type: 'paragraph', text: 'I think we need to distinguish between **ticket closure and problem resolution**.' },
      { type: 'paragraph', text: 'A ticket can be closed because the chatbot completed its prescribed flow. That does not necessarily mean the customer got what they came for. A customer can leave the conversation without escalating further simply because there is no obvious way to do so. The system may record that as a successful interaction, while the customer is still sitting with exactly the same problem.' },
      { type: 'paragraph', text: 'A closed ticket is a **system outcome**.' },
      { type: 'paragraph', text: 'A resolved problem is a **customer outcome**.' },
      { type: 'paragraph', text: 'That distinction becomes even more important when the chatbot itself does not fully understand what the customer is trying to tell it.' },
      { type: 'paragraph', text: 'A lot of these experiences start by giving the customer predefined categories. You choose the service, select the broad type of problem, describe what happened and sometimes upload a photograph or document. The experience can feel intelligent because the chatbot is asking questions and responding to what you say.' },
      { type: 'paragraph', text: 'But underneath that conversation, there may still be a fairly rigid set of rules deciding what happens next.' },
      { type: 'paragraph', text: 'If the customer’s actual problem does not fit neatly into those rules, the system may not know what to do with it. The chatbot may have enough information to know that something is wrong, but not enough flexibility to understand what the customer actually needs.' },
      { type: 'paragraph', text: 'That, to me, is the real product problem.' },
      { type: 'paragraph', text: 'We should not confuse **categorising a problem** with **understanding a problem**.' },
      { type: 'paragraph', text: 'The customer might have selected the right category, answered every question correctly and provided all the requested evidence. But if the system still cannot understand the intent behind those answers, the rest of the flow does not really matter.' },
      { type: 'paragraph', text: 'So what would I change?' },
      { type: 'paragraph', text: 'The first thing would be to make the chatbot genuinely conversational. Instead of simply collecting answers and moving the customer from one step to another, the system should be able to identify the core problem the customer is trying to communicate.' },
      { type: 'paragraph', text: 'More importantly, it should confirm that understanding.' },
      { type: 'paragraph', text: 'Something as simple as, *“Just to confirm, you ordered chicken tacos but received a salad. Is that correct?”* creates a very different experience. It gives the customer a chance to correct the system before the system decides what happens next.' },
      { type: 'paragraph', text: 'The second, and probably more important, change is to give the customer a clear path to a human.' },
      { type: 'paragraph', text: 'AI does not need to solve every problem.' },
      { type: 'paragraph', text: 'In fact, I think a good AI support product should be comfortable saying, *“I cannot resolve this for you, so I am going to connect you with someone who can.”*' },
      { type: 'paragraph', text: 'That should not be considered a failure of the product. It should be considered a **successful handoff**.' },
      { type: 'paragraph', text: 'If the customer has already explained the problem, uploaded photographs and gone through multiple troubleshooting steps, the human agent should receive all of that context. The customer should not have to start from zero and explain the same problem again.' },
      { type: 'paragraph', text: 'And there should always be a clear mechanism for escalation when the AI fails.' },
      { type: 'paragraph', text: 'Not another chatbot loop.' },
      { type: 'paragraph', text: 'Not another generic FAQ.' },
      { type: 'paragraph', text: 'Not a support journey that quietly ends because the user did not accept the chatbot’s recommendation.' },
      { type: 'paragraph', text: 'Just a straightforward way to say, **“This did not solve my problem. I need help from a person.”**' },
      { type: 'paragraph', text: 'Finally, I think companies need to rethink how they measure the success of these systems.' },
      { type: 'paragraph', text: 'Instead of primarily asking how many tickets the chatbot closed, companies should care about whether the chatbot correctly understood the customer’s intent, whether it actually resolved the issue, whether it knew when to escalate, whether the customer had to contact support again, and whether the customer was satisfied with the outcome.' },
      { type: 'paragraph', text: 'There should also be a meaningful feedback loop.' },
      { type: 'paragraph', text: 'When a chatbot fails to understand a customer’s problem, that interaction should not simply become another closed ticket in a dashboard. It should become an input into improving the chatbot, the underlying workflows and, sometimes, the product itself.' },
      { type: 'paragraph', text: 'I am not against AI-powered customer support. I actually think it has enormous potential. There are plenty of situations where I would much rather get an immediate answer from a well-designed AI system than wait on a phone call.' },
      { type: 'paragraph', text: 'But I think we need to be careful about what we are optimising for.' },
      { type: 'paragraph', text: 'The goal of customer support should not be to make the support conversation disappear as quickly as possible.' },
      { type: 'paragraph', text: 'The goal should be to make the customer’s **problem** disappear.' },
      { type: 'paragraph', text: 'As chatbots become more capable, companies may be tempted to assume that better AI automatically means better customer support. I don\'t think that is necessarily true.' },
      { type: 'paragraph', text: 'A smarter chatbot is still a poor support product if it cannot recognise when it has misunderstood the customer, cannot resolve the issue, and cannot connect the customer to someone who can.' },
      { type: 'paragraph', text: 'Ultimately, customers do not care how advanced the underlying AI is. They care whether their problem was understood, whether someone helped them, and whether they walked away satisfied.' },
      { type: 'paragraph', text: '**Chatbots are going to get smarter. The real question is whether we are going to design them to close conversations, or to actually help people.**' },
    ],
  },
]

export function publishedEssays() {
  return essays
    .filter(essay => essay.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
