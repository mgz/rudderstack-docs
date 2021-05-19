import React from "react"

const IntegrationsHelpBox = () => {
  return (
    <div className="bg-white filter-menu rounded-2xl py-8 px-6">
      <h2 className="text-xl text-blue font-bold leading-7">Don’t see that you need?</h2>
      <p className="text-xl leading-6 mt-4 text-secondary">Reach out! Our integrations team will follow up and get your feedback on our roadmap.</p>
      <form>
        <input
          type="email"
          name="email"
          size={40}
          className="mt-4 mb-2 w-full rounded-lg border border-grayColor-lighter p-2"
          id="email"
          aria-required="true"
          aria-invalid="false"
        />
        <a class="w-full text-sm leading-4 btn-primary-lg" href="#">Submit</a>
      </form>

    </div>
  )
}
export default IntegrationsHelpBox
