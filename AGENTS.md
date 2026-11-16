<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Routing uses TanStack Router file routes in `src/routes/` (the spec's "React Router DOM" / `src/pages` maps here); the router is fixed by the stack.
- Editable copy and book data live in `src/data/` (`books.ts`, `siteContent.ts`); components read from there so content changes never touch layout code.
- Site sections are in `src/components/site/`; brand colors, fonts, gradients and the 3D book mockup are tokens/utilities in `src/styles.css` — no hardcoded colors in components.
- Forms post only to endpoints configured in `src/data/siteContent.ts`; with none set they must report "not connected" rather than fake success (covered by `src/lib/forms.test.ts`).
- Retailer links, social links, reviews and volume covers are placeholders until real ones are supplied; never invent them.
