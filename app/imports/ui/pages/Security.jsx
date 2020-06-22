import React from 'react';

/** A simple static component to render some text for the terms page. */
const Terms = () => (
<div className="ui very padded container terms-container">
  <div className="ui one column stackable grid">
    <div className="ui centered row">
      <div className="ui center aligned twelve wide column">
        <h2 className="policy-header2">SECURITY POLICY</h2>
        <hr/>
        <br/>
      </div>
      <div className="ui twelve wide column">
        <div className="ui ordered list"> <a className="item" href="#overview">
          Overview</a> <a className="item" href="#purpose">Purpose</a> <a className="item" href="#scope">Scope</a>
          <div className="item"> <a className="item" href="#policy">Policy</a>
            <div className="list">
              <div className="item"> <a className="item" href="#security-assessment">Security Assessment Criteria</a>
                <div className="list"> <a className="security-link" href="#security-a">
                  a) New or Major Application Release</a> <br/>
                  <a className="security-link" href="#security-b">
                    b) Third Party or Acquired Web Application Release</a> <br/>
                  <a className="security-link" href="#security-c">c) Point Release</a> <br/>
                  <a className="security-link" href="#security-d">d) Patch Release</a> <br/>
                  <a className="security-link" href="#security-e">e) Emergency Release</a> <br/>
                </div>
              </div>
              <div className="item"> <a className="item" href="#risk-levels">Risk Levels</a>
                <div className="list"> <a className="security-link" href="#risk-a">a) High</a> <br/>
                  <a className="security-link" href="#risk-b">b) Medium</a> <br/>
                  <a className="security-link" href="#risk-c">c) Low</a> <br/>
                </div>
              </div>
              <div className="item"> <a className="item" href="#assessment-type">Types of Assessments</a>
                <div className="list"> <a className="security-link" href="#assessment-a">a) Full</a> <br/>
                  <a className="security-link" href="#assessment-b">b) Quick</a> <br/>
                  <a className="security-link" href="#assessment-c">c) Targeted</a> <br/>
                </div>
              </div>
              <div className="item"> <a className="item" href="#security-tools">Security Tools</a>
                <div className="list"> <a className="security-link" href="#tools-a">a) Arachni</a> <br/>
                  <a className="security-link" href="#tools-b">b) Sec Apps</a> <br/>
                </div>
              </div>
            </div>
          </div>
          <div className="item"> <a className="item" href="#compliance">Policy Compliance</a>
            <div className="list"> <a className="item" href="#compliance-a">
              Compliance Measurement</a> <a className="item" href="#compliance-b">
              Exceptions</a> <a className="item" href="#compliance-c">Non-Compliance</a> </div>
          </div>
          <a className="item" href="#compliance-related">Related Standards, Policies and Processes</a> <br/>
        </div>
      </div>
      <div className="ui twelve wide column">
        <hr/>
        <div className="ui ordered list">
          <div className="item item-desc"><b className="terms-title">
            <a className="security-text" name="overview">Overview</a></b><br/>
            Web application vulnerabilities account for the largest portion of attack vectors outside of malware.
            It is crucial that any web application be assessed for vulnerabilities and any vulnerabilities be
            remediated prior to production deployment.<br/>
            <br/>
          </div>
          <div className="item item-desc"><b className="terms-title">
            <a className="security-text" name="purpose">Purpose</a></b><br/>
            The purpose of this policy is to define web application security assessments within Task Jeeves
            Web application assessments are performed to identify potential or realized weaknesses as a result
            of inadvertent mis-configuration, weak authentication, insufficient error handling, sensitive
            information leakage, etc.  Discovery and subsequent mitigation of these issues will limit the attack
            surface of Task Jeeves services available both internally and externally as well as satisfy compliance
            with any relevant policies in place.<br/>
            <br/>
          </div>
          <div className="item item-desc"><b className="terms-title">
            <a className="security-text" name="scope">Scope</a></b><br/>
            This policy covers all web application security assessments requested by any individual,
            group or department for the purposes of maintaining the security posture, compliance,
            risk management, and change control of technologies in use at Task Jeeves.<br/>
            All web application security assessments will be performed by delegated security personnel
            either employed or contracted by Task Jeeves. All findings are considered confidential and
            are to be distributed to persons on a “need to know” basis.  Distribution of any findings
            outside of Task Jeeves is strictly prohibited unless approved by the Chief Information Officer.<br/>
            Any relationships within multi-tiered applications found during the scoping phase will be included
            in the assessment unless explicitly limited.  Limitations and subsequent justification will be
            documented prior to the start of the assessment.<br/>
            <br/>
          </div>
          <div className="item item-desc"><b className="terms-title">
            <a className="security-text" name="policy">Policy</a></b>
            <div className="list">
              <div className="item item-desc"> <a className="security-text" name="security-assessment">
                Web applications are subject to security assessments based on the following criteria:</a><br/>
                <div className="list"> <a className="security-text" name="security-a">
                  a) New or Major Application Release – will be subject to a full assessment prior to
                  approval of the change control documentation and/or release into the live environment.<br/>
                  <br/>
                  </a> <a className="security-text" name="security-b">
                  b) Third Party or Acquired Web Application – will be subject to full assessment after
                  which it will be bound to policy requirements.<br/>
                  <br/>
                  </a> <a className="security-text" name="security-c">
                  c) Point Releases – will be subject to an appropriate assessment level based on the risk of
                  the changes in the application functionality and/or architecture.<br/>
                  <br/>
                  </a> <a className="security-text" name="security-d">
                  d) Patch Releases – will be subject to an appropriate assessment level based on the risk
                  of the changes to the application functionality and/or architecture.<br/>
                  <br/>
                  </a> <a className="security-text" name="security-e">
                  e) Emergency Releases – An emergency release will be allowed to forgo security assessments
                  and carry the assumed risk until such time that a proper assessment can be carried out.
                  Emergency releases will be designated as such by the Chief Information Officer or an
                  appropriate manager who has been delegated this authority.<br/>
                  <br/>
                  </a> </div>
              </div>
              <div className="item item-desc"><a className="security-text" name="risk-levels">
                All security issues that are discovered during assessments must be mitigated based upon the
                following risk levels. The Risk Levels are based on the Common Vulnerability Scoring System v3.1
                (CVSS. Remediation validation testing will be required to validate fix and/or mitigation strategies
                for any discovered issues of Medium risk level or greater.</a>
                <div className="list">
                  <a className="security-text" name="risk-a">
                    a) High – Any high risk issue must be fixed immediately or other mitigation strategies
                    must be put in place to limit exposure before deployment.  Applications with high risk
                    issues are subject to being taken off-line or denied release into the live environment.<br/>
                    <br/>
                  </a>
                  <a className="security-text" name="risk-b">
                    b) Medium – Medium risk issues should be reviewed to determine what is required to mitigate and
                    scheduled accordingly.  Applications with medium risk issues may be taken off-line or denied
                    release into the live environment based on the number of issues and if multiple issues
                    increase the risk to an unacceptable level.  Issues should be fixed in a patch/point release.<br/>
                    <br/>
                  </a>
                  <a className="security-text" name="risk-c">
                    c) Low – Issue should be reviewed to determine what is required to correct
                    the issue and scheduled accordingly.<br/>
                  </a>
                </div>
              </div>
              <div className="item item-desc"> <a name="assessment-type" className="security-text">
                The following security assessment levels shall be established by the InfoSec organization
                or other designated organization that will be performing the assessments.</a>
                <div className="list">
                  <div className="security-text"> <a name="assessment-a" className="security-text">
                    a) Full – A full assessment is comprised of tests for all known web application vulnerabilities
                    using both automated and manual tools based on the Common Vulnerability Scoring System v3.1
                    (CVSS) Testing Guide.  A full assessment will use manual penetration testing techniques to
                    validate discovered vulnerabilities to determine the overall risk of any and all discovered.<br/>
                    <br/></a>
                  </div>
                  <div className="security-text"> <a name="assessment-b" className="security-text">
                    b)Quick – A quick assessment will consist of a (typically) automated scan of an application for
                    the Common Vulnerability Scoring System v3.1 (CVSS) Top Ten web application security
                    risks at a minimum.<br/>
                    <br/></a>
                  </div>
                  <div className="security-text"> <a name="assessment-c" className="security-text">
                    c)Targeted – A targeted assessment is performed to verify vulnerability remediation
                    changes or new application functionality.<br/></a>
                  </div>
                </div>
              </div>
              <div className="item item-desc"> <a name="security-tools" className="security-text">
                The current approved web application security assessment tools in use which will be used
                for testing are:</a>
                <div className="list">
                  <div className="security-text"> a)
                    <a className="security-link" href="https://www.arachni-scanner.com/" name="tools-a">
                      Arachni – Web Application Security Scanner Framework</a><br/>
                    <br/>
                  </div>
                  <div className="security-text">b)
                    <a className="security-link" href="https://secapps.com/" name="tools-b">
                      Sec Apps – Advanced Tools and Services for Security and Development Teams</a><br/>
                    <br/>
                  </div>
                </div>
                Other tools and/or techniques may be used depending upon what is found in the default
                assessment and the need to determine validity and risk are subject to the discretion
                of the Security Engineering team. </div>
            </div>
          </div>
          <div className="item item-desc"><a className="security-text" name="compliance">Policy Compliance</a>
            <div className="list">
              <div className="item item-desc"> <a name="compliance-a" className="security-text">
                Compliance Measurement<br/></a>
                <div className="list"> The Infosec team will verify compliance to this policy through
                   various methods, including but not limited to, periodic walk-throughs, video monitoring,
                  business tool reports, internal and external audits, and feedback to the policy owner. <br/>
                  <br/>
                </div>
              </div>
              <div className="item item-desc"> <a name="compliance-b" className="security-text">
          Exceptions<br/></a>
                <div className="list"> An employee found to have violated this policy may
                  be subject to disciplinary action, up to and including termination of employment. <br/>
                  Web application assessments are a requirement of the change control process and are required to
                  adhere to this policy unless found to be exempt.   All application releases must pass
                  through the change control process.  Any web applications that do not adhere to this
                  policy may be taken offline until such time that a formal assessment can be performed
                  at the discretion of the Chief Information Officer.<br/>
                  <br/>
                </div>
              </div>
              <div className="item item-desc"> <a name="compliance-c" className="security-text">
          Non-Compliance<br/></a>
                <div className="list"> An employee found to have violated this policy may be
                  subject to disciplinary action, up to and including termination of employment. <br/>
                  Web application assessments are a requirement of the change control process and are
                  required to adhere to this policy unless found to be exempt.   All application releases
                  must pass through the change control process.  Any web applications that do not adhere
                  to this policy may be taken offline until such time that a formal assessment can be
                  performed at the discretion of the Chief Information Officer. <br/>
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <div className="item item-desc"><b><a className="security-text" name="compliance-related">
            Related Standards, Policies and Processes</a></b>
            <div className="list"> <a className="security-link"
                                      href="https://www.first.org/cvss/v3.1/specification-document">
              Common Vulnerability Scoring System v3.1 (CVSS) Specification Document</a><br/>
              <br/>
              <a className="security-link" href="https://www.first.org/cvss/v3.1/user-guide">
                Common Vulnerability Scoring System v3.1 (CVSS) User Guide </a><br/>
              <br/>
              <a className="security-link" href="https://www.first.org/cvss/v3.1/examples">
                Common Vulnerability Scoring System v3.1 (CVSS) Examples</a><br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Terms;
