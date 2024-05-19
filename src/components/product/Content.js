import React from 'react';

const Content = ({content}) => {
    return (
        <div className="w-pd-i-left">
            <ul id="w-pd-i-head" className="l w-pd-i-head">
                {content.sections.map((section, index)=>{
                            return <li key={index}><a href={'#'+section.id}>{section.title}</a></li>
                    })}
            </ul>

            <div className="cl"></div>
            {content.sections.map((section, index)=>{
                            return <div key={index} id={section.id} className="w-pd-i-content" dangerouslySetInnerHTML={{__html: section.content}}/>
                    })}
            <div className="tags tags-item">
                <p className="tags-head">{content.tags.tagsHead}</p>
                <ul>
                    {content.tags.items.map((item, index)=>{
                            return <li key={index}><a title={item.title} href={item.href}><span>{item.title}</span></a></li>
                    })}
                </ul>
            </div>

            <div className="cl"></div>
            <div className="cl"></div>
        </div>
    );
}

export default Content;