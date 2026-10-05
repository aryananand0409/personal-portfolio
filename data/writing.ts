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
    "slug": "fable-favorite-product",
    "title": "What’s Your Favourite Product? Why I Keep Coming Back to Fable",
    "dek": "A product interview question that rewards genuine curiosity. Here’s what using Fable taught me about reading habits, personal libraries, and a more thoughtful AI-assisted review journey.",
    "date": "2026-10-05",
    "category": "Product thinking",
    "readTimeMin": 7,
    "status": "published",
    "blocks": [
      {
        "type": "paragraph",
        "text": "“What’s your favourite product?”"
      },
      {
        "type": "paragraph",
        "text": "This is probably one of the most common questions you get asked in a Product interview."
      },
      {
        "type": "paragraph",
        "text": "I've always found it interesting because there really isn't a right answer. You can pick Spotify, Google Maps, Notion, Swiggy, WhatsApp, Airbnb, or pretty much any product you use regularly."
      },
      {
        "type": "paragraph",
        "text": "But I don't think what makes the question interesting is the product you choose. It's how well you know the product you're talking about."
      },
      {
        "type": "paragraph",
        "text": "Have you used it enough to notice the small things? Have you thought about why certain parts of the experience work? Do you have an opinion on what could be better?"
      },
      {
        "type": "paragraph",
        "text": "For me, one product that I've ended up thinking about quite a lot is Fable."
      },
      {
        "type": "paragraph",
        "text": "I discovered Fable in September last year, when I decided I wanted to become more consistent with reading. I've been an avid reader since school, but I wanted some structure around it. I wanted to know what I was reading, what I wanted to read next, what I had finished, and whether I was actually making progress."
      },
      {
        "type": "paragraph",
        "text": "So I set myself a goal of reading 24 books this year and decided to use Fable to track that journey."
      },
      {
        "type": "paragraph",
        "text": "I've finished 7 so far, and somewhere along the way, Fable became much more than a place where I kept a list of books."
      },
      {
        "type": "heading",
        "text": "What pulled me in initially"
      },
      {
        "type": "paragraph",
        "text": "The first thing I noticed was the overall feel of the product."
      },
      {
        "type": "image",
        "src": "/images/writing/fable-reading-goal.jpg",
        "alt": "Fable’s reading goal and progress screen.",
        "caption": "A calm, visual way to make reading progress tangible."
      },
      {
        "type": "paragraph",
        "text": "The UI is calm and intentional. There isn't a lot of visual noise, and it doesn't feel like the product is constantly trying to get my attention. That felt quite appropriate for something built around reading."
      },
      {
        "type": "paragraph",
        "text": "Even some of the smallest interactions feel thought through. I really like how easy it is to mark that I've read today. There's also a widget I can put on my home screen, so I don't even have to open the app to record it."
      },
      {
        "type": "paragraph",
        "text": "The app is quick to load, and the actual action of recording progress is almost effortless."
      },
      {
        "type": "paragraph",
        "text": "It sounds like a very small thing, but when you're trying to build a daily habit, I think that matters. Fable doesn't make me work to maintain the habit."
      },
      {
        "type": "heading",
        "text": "The deeper problem Fable solves is consistency"
      },
      {
        "type": "paragraph",
        "text": "On the surface, Fable does all the obvious things you'd expect from a reading app."
      },
      {
        "type": "paragraph",
        "text": "I can have a Currently Reading list, a Want to Read list and a Finished list. I can search for pretty much any book I want, add it to a list and slowly build my own library."
      },
      {
        "type": "paragraph",
        "text": "What I like is that it doesn't feel like I'm maintaining a spreadsheet of books. It feels like I'm building a personal library. Seeing that collection grow makes maintaining my TBR surprisingly enjoyable."
      },
      {
        "type": "paragraph",
        "text": "But the thing that really changed my behaviour was the streak."
      },
      {
        "type": "paragraph",
        "text": "Once I started seeing the reading streak go up, I wanted to keep it going. I remember getting to two days and thinking, “Well, now I don't want to break this.” No wonder my best streak this year has been 47 days."
      },
      {
        "type": "paragraph",
        "text": "The same thing happened with the book I was currently reading. Seeing my progress move forward gave me a small sense that I was actually getting somewhere. I already wanted to read more before I started using Fable. Fable didn't create that desire."
      },
      {
        "type": "paragraph",
        "text": "What it did was give me a way to see myself making progress towards it. And I think that's a pretty powerful thing for a habit product to do."
      },
      {
        "type": "heading",
        "text": "Fable is slowly building a picture of me as a reader"
      },
      {
        "type": "paragraph",
        "text": "The more I've used Fable, the more I've realized that reading progress is only one part of what the product is capturing."
      },
      {
        "type": "paragraph",
        "text": "My profile shows my monthly reading numbers, how I'm doing against my reading goal, the days I've actually read, my most-read genres, my average rating and my most-read authors. I can also get to my lists, clubs, reviews, posts and likes."
      },
      {
        "type": "paragraph",
        "text": "Initially, I looked at these as a bunch of useful features."
      },
      {
        "type": "paragraph",
        "text": "Over time, I started seeing them as something more interesting. They're building a picture of me as a reader."
      },
      {
        "type": "image",
        "src": "/images/writing/fable-reading-insights.jpg",
        "alt": "Fable’s reading insights, including genres and ratings.",
        "caption": "Reading history can reveal patterns in genre preferences and ratings."
      },
      {
        "type": "paragraph",
        "text": "If I use Fable for another few years, my profile won't just tell me which books I've read. It could tell me what kinds of books I gravitate towards, which authors I keep coming back to, how often I read, what I tend to rate highly, and maybe even how my taste has changed over time."
      },
      {
        "type": "paragraph",
        "text": "A single rating tells Fable what I thought about one book. Years of reading history could tell it something much more interesting about me."
      },
      {
        "type": "paragraph",
        "text": "And then there is the social side. I can find clubs and communities around books, see what other people are reading, read reviews and posts, and interact with other readers."
      },
      {
        "type": "image",
        "src": "/images/writing/fable-community.jpg",
        "alt": "Fable’s friends feed with reading activity and book covers.",
        "caption": "A social feed connects individual reading with other readers."
      },
      {
        "type": "paragraph",
        "text": "Fable is also where I can look up a book, see its rating, read spoiler-free reviews, find information about the author and then decide whether I want to add it to my list. The more I use it, the more Fable feels like a place I go whenever I have something to do with books — not just a place where I track what I've read."
      },
      {
        "type": "heading",
        "text": "There is one part of Fable that I think could be much better"
      },
      {
        "type": "paragraph",
        "text": "This is probably the biggest product opportunity I've started thinking about after using Fable for a while. When I finish reading a book, Fable asks me to rate it: I can give it an overall star rating, rate aspects like the characters, plot and writing style, add trigger warnings, and write a review. It's a perfectly reasonable flow, but I've started wondering if we're asking the user to do all of this at the wrong time."
      },
      {
        "type": "paragraph",
        "text": "Most of my thoughts about a book don't happen at the end; they happen while I'm reading. I might really like a character at 20%, have a question about something that happened, love the writing in one chapter and find the next few slow. I might make a prediction, come across a sentence I love, or completely change my opinion about a character by the time I finish. But most people aren't annotating all of this. I'm certainly not."
      },
      {
        "type": "paragraph",
        "text": "So when Fable asks me to write a review, I'm trying to remember what I felt over the last few weeks, and that's not always easy. I think there's an opportunity for Fable to treat a review as something that builds throughout the reading journey, rather than something that happens after it's over."
      },
      {
        "type": "paragraph",
        "text": "As I mark my reading progress, Fable could occasionally offer a lightweight way to capture what's on my mind: a thought, a question, something I loved, or something that annoyed me. And sometimes I might not write anything at all. I wouldn't want this to become another habit I'm forced to maintain; reading shouldn't feel like filling out a productivity tracker. But when I do want to capture something, Fable could make it easy."
      },
      {
        "type": "image",
        "src": "/images/writing/fable-review-journey.jpg",
        "alt": "High-level concept diagram for capturing reading thoughts and using AI to organize them into a review.",
        "caption": "A review journey that captures optional thoughts while reading, then helps organize memories, themes, emotions, and evolving opinions at the end."
      },
      {
        "type": "paragraph",
        "text": "Then, when I finish the book, I could revisit those little thoughts instead of opening a blank review box and trying to remember everything. This is where I think AI could be genuinely useful. I don't want an AI to write a generic five-star review for me; I'd much rather have it help me remember what I thought by organizing the notes I've captured along the way."
      },
      {
        "type": "paragraph",
        "text": "It could show me that I mentioned a character several times, remind me of a question I had halfway through, or trace how my thoughts about the protagonist changed. Then I can decide what I actually want to say. The AI isn't replacing my opinion; it's helping me reconstruct my own reading experience."
      },
      {
        "type": "paragraph",
        "text": "And honestly, that's something I might actually pay for."
      },
      {
        "type": "heading",
        "text": "Where I think Fable could go"
      },
      {
        "type": "paragraph",
        "text": "If I think about Fable five years from now, I don't see it as just a reading tracker."
      },
      {
        "type": "paragraph",
        "text": "I see the potential for it to become a personal book and reading platform — a place to discover books, understand what other readers think, find communities, track my reading and, eventually, understand my own reading taste."
      },
      {
        "type": "paragraph",
        "text": "The interesting part is the context Fable can accumulate over time: what I read, what I liked, what I abandoned, the authors and genres I return to, and even the thoughts I have while reading."
      },
      {
        "type": "paragraph",
        "text": "If Fable can understand not just what I like but why I like it, recommendations could become much more personal."
      },
      {
        "type": "paragraph",
        "text": "That's where I see AI fitting in. Not as an AI layer added for the sake of it, but as a way to connect all of this context and make discovery and reflection better."
      },
      {
        "type": "paragraph",
        "text": "Eventually, Fable could become a personal smart library — something that doesn't just track my reading history, but reflects my taste, curiosity and how they evolve over time."
      },
      {
        "type": "heading",
        "text": "Coming back to the interview question"
      },
      {
        "type": "paragraph",
        "text": "So, what's my favourite product?"
      },
      {
        "type": "paragraph",
        "text": "I don't think Fable is my favourite product because I think it's perfect. In fact, one of the reasons I enjoy talking about it is because I can think of quite a few things I'd change."
      },
      {
        "type": "paragraph",
        "text": "I've used it long enough to notice the tiny interactions that make me want to come back, how something as simple as a streak can change my behaviour, and where the product falls short for me."
      },
      {
        "type": "paragraph",
        "text": "More importantly, I've started thinking about why those things work and what I would build if I were responsible for taking the product forward."
      },
      {
        "type": "paragraph",
        "text": "And maybe that's what makes the “What's your favourite product?” question interesting for a Product Manager."
      },
      {
        "type": "paragraph",
        "text": "You don't necessarily need to pick the most sophisticated product in the world, or the product with the most impressive technology behind it."
      },
      {
        "type": "paragraph",
        "text": "Pick something you genuinely use. Use it enough to notice the small things. Pay attention to why a particular interaction feels effortless, why something changes your behaviour, or why something that should work better doesn't."
      },
      {
        "type": "paragraph",
        "text": "For me, that's probably where product thinking starts."
      },
      {
        "type": "paragraph",
        "text": "Not with a framework or a perfectly structured product teardown, but with simply paying enough attention to something you use."
      }
    ]
  },
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
